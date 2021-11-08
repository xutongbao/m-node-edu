let { dataArr } = require('../data')

//搜索
const dataSearch = (req, res) => {
  const { tableId, page = 1, pageSize = 10, searchParams = {} } = req.body
  const table = dataArr.find((item) => item.id === tableId).table
  if (table) {
    let list = [...table.dataArr]

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
  
    const start = (page - 1) * pageSize
    const end = start + pageSize * 1

    console.log('hello')

    res.send({
      code: 200,
      data: {
        list: list.slice(start, end),
        total: list.length,
        current: page - 0,
        pageSize: pageSize - 0,
        fields: table.fields,
      },
      message: '搜索成功1',
    })
  }
}

//添加
const dataAdd = (req, res) => {
  const { tableId, dataItem } = req.body
  console.log('add')
  const index = dataArr.findIndex((item) => item.id === tableId)
  dataItem.id = Date.now()
  dataItem.createTime = Date.now()
  dataArr[index].table.dataArr.unshift({ ...dataItem })
  res.send({
    code: 200,
    data: dataItem,
    message: '添加成功',
  })
}

//删除
const dataDelete = (req, res) => {
  let { tableId, ids } = req.body
  const tableIndex = dataArr.findIndex((item) => item.id === tableId)
  console.log(ids)
  dataArr[tableIndex].table.dataArr = dataArr[tableIndex].table.dataArr.filter((item) => !ids.includes(item.id))
  res.send({
    code: 200,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { tableId, id, dataItem } = req.body
  const tableIndex = dataArr.findIndex((item) => item.id === tableId)
  let index = dataArr[tableIndex].table.dataArr.findIndex((item) => item.id === id)
  if (index >= 0) {
    dataArr[tableIndex].table.dataArr[index] = { id, ...dataItem, updateTime: Date.now() }
    res.send({
      code: 200,
      data: dataItem,
      message: '编辑成功',
    })
  } else {
    res.send({
      code: 400,
      data: dataItem,
      message: '编辑失败，id不存在',
    })
  }
}

module.exports = {
  appTableSearch: dataSearch,
  appTableAdd: dataAdd,
  appTableDelete: dataDelete,
  appTableEdit: dataEdit,
}
