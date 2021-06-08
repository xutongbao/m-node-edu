let { dataArr } = require('../data')

//搜索
const dataSearch = (req, res) => {
  const { tableId } = req.body
  const application = dataArr.find((item) => item.id === tableId)
  const fields = application.table.fields.sort((a, b) => a.orderIndex - b.orderIndex)

  res.send({
    code: 200,
    data: {
      title: application.title,
      fields
    },
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { tableId, dataItem } = req.body
  console.log('add')
  const index = dataArr.findIndex((item) => item.id === tableId)
  dataItem.id = Date.now()
  dataArr[index].table.fields.push({ ...dataItem })
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
  dataArr[tableIndex].table.fields = dataArr[tableIndex].table.fields.filter(
    (item) => !ids.includes(item.id)
  )
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
  let index = dataArr[tableIndex].table.fields.findIndex(
    (item) => item.id === id
  )
  if (index >= 0) {
    dataArr[tableIndex].table.fields[index] = {
      id,
      ...dataItem,
      updateTime: Date.now(),
    }
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
  fieldsSearch: dataSearch,
  fieldsAdd: dataAdd,
  fieldsDelete: dataDelete,
  fieldsEdit: dataEdit,
}
