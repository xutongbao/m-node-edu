const { runSql, queryPromise } = require('../../db/index')
const { logger } = require('../../utils/tools')

let dataArr = [
  {
    id: 1632983530971,
    name: '知了好客',
    gitRepositorieName: 'edu',
    branch: 'origin/feature/newName',
    url: 'http://39.97.238.175:81/edu/origin/feature/newName',
    remarks: '知了好客改为知了好学',
    addtime: 1632983530971
  },
  {
    id: 1632983182375,
    name: '知了好客',
    gitRepositorieName: 'edu',
    branch: 'origin/release/ui20210720',
    url: 'http://39.97.238.175:81/edu/origin/release/ui20210720',
    remarks: '和线上代码同步',
    addtime: 1632983182376
  },
  {
    id: 1632982857927,
    name: '知了好客',
    gitRepositorieName: 'edu',
    branch: 'origin/feature/login',
    url: 'http://39.97.238.175:81/edu/origin/feature/login',
    remarks: '开发中',
    addtime: 1632982857927
  },
  {
    id: 1632982651006,
    name: '探马',
    gitRepositorieName: 'tan',
    branch: 'origin/feature/login',
    url: 'http://39.97.238.175:81/tan/origin/feature/login',
    remarks: '自动',
    addtime: 1632982651006
  },
  {
    id: 1632982424994,
    name: '探马',
    gitRepositorieName: 'tan',
    branch: 'origin/master',
    url: 'http://39.97.238.175:81/tan/origin/master',
    remarks: '自动',
    addtime: 1632982424994
  },
  {
    id: 1632981932852,
    name: '无代码平台',
    gitRepositorieName: 'air',
    branch: 'origin/feature/home',
    url: 'http://39.97.238.175:81/air/origin/feature/home',
    remarks: '自动',
    addtime: 1632981932852
  },
  {
    id: 1632981815592,
    name: '无代码平台',
    gitRepositorieName: 'air',
    branch: 'origin/master',
    url: 'http://39.97.238.175:81/air/origin/master',
    remarks: '自动',
    addtime: 1632981815592
  },
  {
    id: 1632981815591,
    name: 'node接口',
    gitRepositorieName: 'm-node-edu',
    branch: 'origin/master',
    url: 'http://39.97.238.175:81',
    remarks: '自动，接口地址',
    addtime: 1632981815591
  }
]

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
    message: '搜索成功'
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
    let err = await runSql(`DELETE FROM projectTest WHERE uid in (${ids.join(',')})`)
    err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        branch,
        url,
        remarks,
        addtime,
        edittime
    )
    VALUES (
        '${uid}',
        '${dataItem.name}',
        '${dataItem.gitRepositorieName}',
        '${dataItem.branch}',
        '${dataItem.url}',
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
    const err = await runSql(
      `INSERT INTO projectTest (
        uid,
        name,
        gitRepositorieName,
        branch,
        url,
        remarks,
        addtime,
        edittime
    )
    VALUES (
        '${uid}',
        '${dataItem.name}',
        '${dataItem.gitRepositorieName}',
        '${dataItem.branch}',
        '${dataItem.url}',
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
  const err = await runSql(`DELETE FROM projectTest WHERE uid in (${ids.join(',')})`)
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
  const err = await runSql(`UPDATE projectTest SET 'name' = '${dataItem.name}', 'remarks' = '${dataItem.remarks}', 'edittime' = '${Date.now()}' WHERE uid = '${id}'`)
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

// 状态操作
const dataUp = (req, res) => {
  const { id, isUp } = req.body

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataArr[index] = { ...dataArr[index], isUp: isUp, edittime: Date.now() }
    res.send({
      state: 1,
      data: {},
      message: '操作成功'
    })
  } else {
    res.send({
      state: 0,
      data: {},
      message: 'id不存在'
    })
  }
}

module.exports = {
  jenkinsSearch: dataSearch,
  jenkinsAdd: dataAdd,
  jenkinsDelete: dataDelete,
  jenkinsEdit: dataEdit,
  jenkinsUp: dataUp
}
