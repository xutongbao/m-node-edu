const { runSql, queryPromise } = require('../../db/index')
const {
  logger,
  choosePort,
  sleep,
  getHash,
  deepClone
} = require('../../utils/tools')
const spawn = require('cross-spawn')
const { createProxyMiddleware } = require('http-proxy-middleware')
const fs = require('fs')

let tempPort

//搜索
const dataSearch = async (req, res) => {
  const { pageNum = 1, pageSize = 10 } = req.body

  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]

  const searchParams = req.body || {}
  delete searchParams.pageNum
  delete searchParams.pageSize

  list = list
    .filter((item) => {
      let flag = true
      for (let key in searchParams) {
        if (
          typeof item[key] === 'string' &&
          !item[key].includes(searchParams[key])
        ) {
          flag = false
        } else if (
          typeof item[key] === 'number' &&
          !(item[key] === searchParams[key])
        ) {
          flag = false
        }
      }
      return flag
    })
    .map((item) => {
      return {
        ...item,
        id: item.uid,
        uid: undefined,
        addtime: item.addtime - 0,
        edittime: item.edittime - 0,
        info:
          typeof item.info === 'string' && item.info !== ''
            ? JSON.parse(item.info)
            : {}
      }
    })

  const start = (pageNum - 1) * pageSize
  const end = start + pageSize * 1
  logger('jenkins').info('列表页搜索')
  res.send({
    state: 1,
    data: {
      list: list.slice(start, end),
      totalCount: list.length,
      pageNum: pageNum - 0,
      pageSize: pageSize - 0
    },
    message: '搜索成功1'
  })
}

//添加
const dataAdd = async (req, res) => {
  const { dataItem } = req.body
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]
  const index = list.findIndex((item) => item.url === dataItem.url)
  const uid = Date.now()
  let objInfo = {}
  if (index >= 0) {
    const ids = [list[index].uid]
    let err = await runSql(
      `DELETE FROM projectTest WHERE uid in (${ids.join(',')})`
    )
    let info = list[index].info
    info = typeof info === 'string' && info !== '' ? JSON.parse(info) : {}
    if (!info.hash) {
      info.hash = getHash({ list })
    }
    info.projectType = dataItem.projectType ? dataItem.projectType : ''
    objInfo = deepClone(info)

    info = JSON.stringify(info)
    err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        jenkinsProjectName,
        branch,
        url,
        info,
        remarks,
        addtime,
        edittime
    )
    VALUES (
        '${uid}',
        '${dataItem.name}',
        '${dataItem.gitRepositorieName}',
        '${dataItem.jenkinsProjectName}',
        '${dataItem.branch}',
        '${dataItem.url}',
        '${info}',
        '${dataItem.remarks}',
        '${uid}',
        ''
    )`
    )
    if (err) {
      res.send({
        state: 0,
        data: err,
        message: '添加失败'
      })
    } else {
      res.send({
        state: 1,
        data: {
          dataItem,
          info: objInfo
        },
        message: 'url重复，添加成功'
      })
    }
  } else {
    const hash = getHash({ list })
    let info = {
      hash,
      projectType: dataItem.projectType ? dataItem.projectType : ''
    }
    objInfo = deepClone(info)
    info = JSON.stringify(info)
    const err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        jenkinsProjectName,
        branch,
        url,
        info,
        remarks,
        addtime,
        edittime
    )
    VALUES (
        '${uid}',
        '${dataItem.name}',
        '${dataItem.gitRepositorieName}',
        '${dataItem.jenkinsProjectName}',
        '${dataItem.branch}',
        '${dataItem.url}',
        '${info}',
        '${dataItem.remarks}',
        '${uid}',
        ''
    )`
    )
    if (err) {
      res.send({
        state: 0,
        data: err,
        message: '添加失败'
      })
    } else {
      res.send({
        state: 1,
        data: {
          dataItem,
          info: objInfo
        },
        message: '添加成功'
      })
    }
  }
}

//删除
const dataDelete = async (req, res) => {
  let { ids } = req.body
  const err = await runSql(
    `DELETE FROM projectTest WHERE uid in (${ids.join(',')})`
  )
  if (err) {
    res.send({
      state: 0,
      data: err,
      message: '添加失败'
    })
  } else {
    res.send({
      state: 1,
      data: ids,
      message: '删除成功'
    })
  }
}

//编辑
const dataEdit = async (req, res) => {
  let { id, dataItem } = req.body
  const err = await runSql(
    `UPDATE projectTest SET 'name' = '${dataItem.name}', 'remarks' = '${
      dataItem.remarks
    }', 'edittime' = '${Date.now()}' WHERE uid = '${id}'`
  )
  if (err) {
    res.send({
      state: 0,
      data: err,
      message: '编辑失败'
    })
  } else {
    res.send({
      state: 1,
      data: {
        id,
        dataItem
      },
      message: '编辑成功'
    })
  }
}

//查找可用端口的函数
const getPort = async ({
  gitRepositorieName = 'm-node-edu',
  branch,
  port = 81,
  isSsr = false
}) => {
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]
  console.log('getPort:', branch)
  const branchTestInfo = list.find((item) => {
    return (
      item.gitRepositorieName === gitRepositorieName && item.branch === branch
    )
  })
  //查找可用端口时可以传递一个起始端口号，默认是81
  //根据gitRepositorieName和branch去数据库中查找是否该项目的该分支已经存在端口号，如果存在，使用存在的
  //经过上述操作后获得的端口号，再使用choosePort函数检查可用性，若不可以会递增端口号继续查找可用端口
  //最终获得一个可用的端口
  let usedPort = port
  let isHasHistroyPort = false
  if (branchTestInfo && branchTestInfo.url) {
    const tempArr = branchTestInfo.url.split(':')
    if (tempArr.length >= 3) {
      if (tempArr[2] && Number.isInteger(tempArr[0] - 0)) {
        usedPort = tempArr[2]
        isHasHistroyPort = true
      }
    }
  }
  console.log('usedPort:', usedPort)
  console.log('isSsr:', isSsr)
  console.log('isHasHistoryPort:', isHasHistroyPort)

  if (isSsr && isHasHistroyPort) {
    tempPort = usedPort
  } else {
    tempPort = await choosePort({ port: usedPort })
  }
  
  console.log('tempPort:', tempPort)
  return tempPort
}

//查看可用端口的接口
const dataGetPort = async (req, res) => {
  const { gitRepositorieName, branch, port } = req.body
  console.log(req.body)
  const resultPort = await getPort({ gitRepositorieName, branch, port })
  res.send({
    state: 1,
    data: {
      port: resultPort
    },
    message: '成功'
  })
}

//端口转发
const portTransfer = async ({ app }) => {
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]

  list = list
    .filter((item) => {
      let info =
        typeof item.info === 'string' && item.info !== ''
          ? JSON.parse(item.info)
          : {}
      return info.projectType === 'node'
    })
    .map((item) => {
      const url = item.url.split(':')
      let port = url[url.length - 1]
      if (!Number.isInteger(port - 1)) {
        port = 80
      }
      let info =
        typeof item.info === 'string' && item.info !== ''
          ? JSON.parse(item.info)
          : {}
      return {
        ...item,
        port,
        hash: info.hash
      }
    })

  list.forEach((item) => {
    const sign = `${item.hash}`
    //接口转发
    app.use(
      `/${sign}`,
      createProxyMiddleware({
        target: `http://localhost:${item.port}`,
        changeOrigin: true,
        pathRewrite: {
          [`^/${sign}`]: ''
        }
      })
    )
  })
}

//jenkins部署时自动调run接口执行批处理，pm2起项目
const run = async (req, res) => {
  const {
    gitRepositorieName,
    branch,
    pm2ConfigFileName = 'ecosystem.config.js',
    isSsr = false
  } = req.body
  console.log('start:', gitRepositorieName, branch, pm2ConfigFileName, isSsr)
  const resultPort = await getPort({ gitRepositorieName, branch, isSsr })
  spawn.sync('yarn -v', [], { stdio: 'inherit' })
  const path = './'
  spawn.sync(
    `${path}run.bat ${gitRepositorieName} ${branch} ${pm2ConfigFileName}`,
    [],
    { stdio: 'inherit' }
  )
  //启动完成后如何获取端口号

  //#region 通过批处理获取端口号，根据进程号查询端口号，性能差，逻辑复杂
  let isUseBatGetCurrentPort = false
  let currentPort
  if (isUseBatGetCurrentPort) {
    spawn.sync(`${path}runChild1.bat`, [], { stdio: 'inherit' })
    spawn.sync(`${path}runChild2.bat`, [], { stdio: 'inherit' })
    delete require.cache[require.resolve('../../prettylist')]
    const { prettylist } = require('../../prettylist')
    console.log(`sleep start`, new Date())
    //等待一会再继续执行，后续的批处理需要根据进程号查询端口号，这个对应关系需要系统准备好才能查到
    await sleep(10000)
    console.log(`sleep end`, new Date())
    spawn.sync(`${path}runChild3.bat`, [], { stdio: 'inherit' })
    prettylist.forEach((item) => {
      spawn.sync(`${path}runChild4.bat ${item.pid}`, [], { stdio: 'inherit' })
    })
    spawn.sync(`${path}runChild5.bat`, [], { stdio: 'inherit' })
    delete require.cache[require.resolve('../../port')]
    const { port } = require('../../port')

    const currentServer = prettylist.find((item) => {
      let tempBranch = branch.replace(/\//g, '_')
      return item.name === `${gitRepositorieName}_${tempBranch}`
    })

    if (currentServer) {
      port.forEach((item) => {
        if (item.pid === currentServer.pid) {
          const startIndex = item.info.indexOf(':')
          const endIndex = item.info.indexOf(' ', startIndex)
          currentPort = item.info.slice(startIndex + 1, endIndex)
        }
      })
    }
  }

  //#endregion

  while (typeof tempPort === 'undefined') {
    console.log(`sleep start`, new Date())
    await sleep(2000)
    console.log(`sleep end`, new Date())
  }
  console.log('run,tempPort:', tempPort)

  res.send({
    state: 1,
    data: {
      currentPort: tempPort,
      resultPort
    },
    message: '成功'
  })
  tempPort = undefined
}

//重启有端口转发功能的项目
const restart = async (req, res) => {
  //spawn.sync(`runChild6.bat`, [], { stdio: 'inherit' })\
  const restartCountFilePath = './light/jenkins/restartCount.json'
  const restartCountStr = fs.readFileSync(restartCountFilePath, 'utf-8')
  let restartObj = eval('(' + restartCountStr + ')')
  restartObj.restartCount = restartObj.restartCount + 1
  res.send({
    state: 1,
    data: {
      restartCountStr,
      restartObj
    },
    message: '成功'
  })

  //修改json文件，会导致node服务自动重启
  fs.writeFile(
    restartCountFilePath,
    JSON.stringify(restartObj, null, 2),
    { encoding: 'utf8' },
    (err) => {}
  )
}

module.exports = {
  jenkinsSearch: dataSearch,
  jenkinsAdd: dataAdd,
  jenkinsDelete: dataDelete,
  jenkinsEdit: dataEdit,
  jenkinsGetPort: dataGetPort,
  getPort,
  portTransfer,
  jenkinsRun: run,
  jenkinsRestart: restart
}
