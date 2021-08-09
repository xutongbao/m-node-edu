const Mock = require('mockjs')
const { runSql, queryPromise } = require('../../db/index')

//模拟其他值，例如审核状态这种非输入的字段，每次添加新数据时要带上
const mockOtherValue = () => {
  return Mock.mock({
    releaseStatus: () => Mock.Random.integer(0, 1),
    commentCount: () => Mock.Random.integer(0, 5),
    isUp: () => Mock.Random.integer(0, 1),
  })
}

//这些初始值在mock的批量数据中是重复的
const addInitValues = {
  addtime: Date.now(),
  sale_name: '张三',
}

const initValue = () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    //这些值在mock的批量数据中是随机的
    const temp = Mock.mock({
      name: '@cname',
    })
    arr.push({ ...addInitValues, ...temp, ...mockOtherValue(), id: i + 1 })
  }

  return arr
}

let dataArr = initValue()

//搜索
const dataSearch = async (req, res) => {
  const { pageNum = 1, pageSize = 10 } = req.body
  const result = await queryPromise(`SELECT * FROM myLogs ORDER BY addtime DESC`)
  let list = [...result]

  const searchParams = req.body || {}
  delete searchParams.pageNum
  delete searchParams.pageSize

  list = list.filter((item) => {
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

  const start = (pageNum - 1) * pageSize
  const end = start + pageSize * 1
  res.send({
    state: 1,
    data: {
      list: list.slice(start, end),
      totalCount: list.length,
      pageNum: pageNum - 0,
      pageSize: pageSize - 0,
    },
    message: '搜索成功',
  })
}

//添加
const dataAdd = async (req, res) => {
  const { dataItem } = req.body
  const { path, username } = dataItem
  const id = Date.now()
  const addtime = Date.now()
  const edittime = ''
  //const path = 'a'
  //const username = 'admin'
  const browser = 'chrome'
  const detail = '详情'
  const err = await runSql(
    `INSERT INTO myLogs VALUES ('${id}', '${addtime}', '${edittime}', '${path}', '${username}', '${browser}', '${detail}')`
  )
  res.send({
    state: 1,
    data: dataItem,
    message: '添加成功',
  })
}

//删除
const dataDelete = async (req, res) => {
  let { ids } = req.body
  console.log(ids)
  err = await runSql(
    `DELETE FROM myLogs WHERE id=${ids[0]}`
  )
  res.send({
    state: 1,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = async (req, res) => {
  let { id, dataItem } = req.body
  const { path, username } = dataItem
  err = await runSql(
    `UPDATE myLogs SET path='${path}', username='${username}' WHERE id=${id}`
  )
  res.send({
    state: 1,
    data: dataItem,
    message: '编辑成功',
  })
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
      message: '操作成功',
    })
  } else {
    res.send({
      state: 0,
      data: {},
      message: 'id不存在',
    })
  }
}

const dataAction = async (req, res) => {
  const { type } = req.body
  let result = []
  let err
  const id = Date.now()
  const addtime = Date.now()
  const edittime = '1'
  const path = 'a'
  const username = 'admin'
  const browser = 'chrome'
  const detail = '详情'
  const editId = '1628502771985'

  if (type === 'create') {
    err = await runSql(
      `CREATE TABLE myLogs (id TEXT, addtime TEXT, edittime TEXT, path TEXT, username TEXT, browser TEXT, detail TEXT)`
    )
  } else if (type === 'insert') {
    err = await runSql(
      `INSERT INTO myLogs VALUES ('${id}', '${addtime}', '${edittime}', '${path}', '${username}', '${browser}', '${detail}')`
    )
  } else if (type === 'select') {
    result = await queryPromise(`SELECT * FROM myLogs`)
  } else if (type === 'update') {
    err = await runSql(
      `UPDATE myLogs SET edittime='666' WHERE id=${editId}`
    )
  } else if (type === 'delete') {
    err = await runSql(
      `DELETE FROM myLogs WHERE id=${editId}`
    )
  } else if (type === 'drop') {
    runSql('DROP TABLE myLogs')
  }
  //console.log(result)
  if (err) {
    res.send({
      state: 0,
      message: JSON.stringify(err),
    })
  } else {
    res.send({
      state: 1,
      data: result,
      message: '成功',
    })
  }
}

module.exports = {
  logSearch: dataSearch,
  logAdd: dataAdd,
  logDelete: dataDelete,
  logEdit: dataEdit,
  logUp: dataUp,
  logAction: dataAction,
}
