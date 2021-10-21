const { runSql, queryPromise } = require('../../db/index')
const { logger, choosePort, sleep, getHash } = require('../../utils/tools')
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
        edittime: item.edittime - 0
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
  if (index >= 0) {
    const ids = [list[index].uid]
    let err = await runSql(
      `DELETE FROM projectTest WHERE uid in (${ids.join(',')})`
    )
    let hash = list[index].hash
    if (!hash) {
      hash = getHash({ list })
    }
    err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        jenkinsProjectName,
        branch,
        url,
        hash,
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
        '${hash}',
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
        data: dataItem,
        message: 'url重复，添加成功'
      })
    }
  } else {
    const hash = getHash({ list })
    const err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        jenkinsProjectName,
        branch,
        url,
        hash,
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
        '${hash}',
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
        data: dataItem,
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
const getPort = async ({ branch, port }) => {
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]
  console.log('getPort:', branch)
  const branchTestInfo = list.find((item) => {
    return item.gitRepositorieName === 'm-node-edu' && item.branch === branch
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

//端口转发
const portTransfer = async ({ app }) => {
  const result = await queryPromise(
    `SELECT * FROM projectTest ORDER BY addtime DESC`
  )
  let list = [...result]
  console.log(list)
  list = list
    .filter((item) => item.gitRepositorieName === 'm-node-edu')
    .map((item) => {
      const url = item.url.split(':')
      const port = url[url.length - 1]
      return {
        ...item,
        port,
      }
    })
  console.log(list)

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
  const { branch } = req.body
  console.log(branch)
  spawn.sync('yarn -v', [], { stdio: 'inherit' })
  const path = './'
  spawn.sync(`${path}run.bat ${branch}`, [], { stdio: 'inherit' })
  spawn.sync(`${path}runChild1.bat ${branch}`, [], { stdio: 'inherit' })
  spawn.sync(`${path}runChild2.bat ${branch}`, [], { stdio: 'inherit' })
  delete require.cache[require.resolve('../../prettylist')]
  const { prettylist } = require('../../prettylist')
  console.log(`sleep start`, new Date())
  await sleep(5000)
  console.log(`sleep end`, new Date())
  spawn.sync(`${path}runChild3.bat`, [], { stdio: 'inherit' })
  prettylist.forEach((item) => {
    spawn.sync(`${path}runChild4.bat ${item.pid}`, [], { stdio: 'inherit' })
  })
  spawn.sync(`${path}runChild5.bat`, [], { stdio: 'inherit' })
  delete require.cache[require.resolve('../../port')]
  const { port } = require('../../port')

  const currentServer = prettylist.find((item) => {
    const name = item.name.replace(/_/g, '/')
    return name === branch
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

module.exports = {
  jenkinsSearch: dataSearch,
  jenkinsAdd: dataAdd,
  jenkinsDelete: dataDelete,
  jenkinsEdit: dataEdit,
  getPort,
  portTransfer,
  jenkinsRun: run
}
