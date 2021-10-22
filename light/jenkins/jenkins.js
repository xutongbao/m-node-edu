const { runSql, queryPromise } = require('../../db/index')
const { logger, choosePort, sleep, getHash, deepClone } = require('../../utils/tools')
const spawn = require('cross-spawn')
const { createProxyMiddleware } = require('http-proxy-middleware')

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
        info: typeof item.info === 'string' && item.info !== '' ? JSON.parse(item.info) : {}
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
    console.log('dataItem:', dataItem, info)

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

//查找适合的端口
const getPort = async ({ gitRepositorieName = 'm-node-edu', branch, port = 81 }) => {
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]
  console.log('getPort:', branch)
  const branchTestInfo = list.find((item) => {
    return item.gitRepositorieName === gitRepositorieName && item.branch === branch
  })
  let usedPort = port
  if (branchTestInfo && branchTestInfo.url) {
    const tempArr = branchTestInfo.url.split(':')
    if (tempArr.length >= 3) {
      if (tempArr[2]) {
        usedPort = tempArr[2]
      }
    }
  }
  console.log('usedPort:', usedPort)

  const tempPort = await choosePort({ port: usedPort })
  return tempPort
}

const dataGetPort = async (req, res) => {
  const { gitRepositorieName, branch, port } = req.body
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
    .filter((item) =>  {
      let info = typeof item.info === 'string' && item.info !== '' ? JSON.parse(item.info) : {}
      return info.projectType === 'node'
    })
    .map((item) => {
      const url = item.url.split(':')
      let port = url[url.length - 1]
      if (!Number.isInteger(port - 1)) {
        port = 80
      }
      let info = typeof item.info === 'string' && item.info !== '' ? JSON.parse(item.info) : {}
      return {
        ...item,
        port,
        hash: info.hash
      }
    })
  //console.log(list)

  list.forEach((item) => {
    const sign = `${item.hash}`
    //接口转发
    app.use(
      `/${sign}`,
      createProxyMiddleware({
        target: `http://localhost:${item.port}`,
        changeOrigin: true,
        pathRewrite: {
          [`^/${sign}`]: '/'
        }
      })
    )
  })
  // //接口转发
  // app.use(
  //   '/source_scripts_serve1',
  //   createProxyMiddleware({
  //     target: 'http://localhost:84',
  //     changeOrigin: true,
  //     pathRewrite: {
  //       '^/source_scripts_serve1': '/'
  //     }
  //   })
  // )
}

//jenkins部署时自动调run接口执行批处理，pm2起项目
const run = async (req, res) => {
  const { gitRepositorieName, branch, pm2ConfigFileName = 'ecosystem.config.js' } = req.body
  console.log(gitRepositorieName, branch, pm2ConfigFileName)
  spawn.sync('yarn -v', [], { stdio: 'inherit' })
  const path = './'
  spawn.sync(`${path}run.bat ${gitRepositorieName} ${branch} ${pm2ConfigFileName}`, [], { stdio: 'inherit' })
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
  let currentPort

  if (currentServer) {
    port.forEach((item) => {
      if (item.pid === currentServer.pid) {
        const startIndex = item.info.indexOf(':')
        const endIndex = item.info.indexOf(' ', startIndex)
        currentPort = item.info.slice(startIndex + 1, endIndex)
      }
    })
  }

  res.send({
    state: 1,
    data: {
      prettylist,
      port,
      currentServer,
      currentPort
    },
    message: '成功'
  })
}

//重启有端口转发功能的项目
const restart = async (req, res) => {
  const path = './'
  spawn.sync(`${path}runChild6.bat`, [], { stdio: 'inherit' })
  res.send({
    state: 1,
    data: {
    },
    message: '成功'
  })
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
  jenkinsRestart: restart,
}
