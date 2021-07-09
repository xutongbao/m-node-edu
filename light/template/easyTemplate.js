
let dataArr = []

//搜索
const dataSearch = (req, res) => {
  res.send({
    state: 1,
    data: dataArr,
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  dataArr.push({ ...dataItem })
  res.send({
    state: 1,
    data: dataItem,
    message: '添加成功',
  })
}

//删除
const dataDelete = (req, res) => {
  let { ids } = req.body
  console.log(ids)
  dataArr = dataArr.filter((item) => !ids.includes(item.id))
  res.send({
    state: 1,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { id, dataItem } = req.body
  let index = dataArr.findIndex((item) => item.id === id)
  if (index >= 0) {
    dataArr[index] = { id, ...dataItem, updateTime: Date.now() }
    res.send({
      state: 1,
      data: dataItem,
      message: '编辑成功',
    })
  } else {
    res.send({
      state: 0,
      data: dataItem,
      message: '编辑失败，id不存在',
    })
  }
}

module.exports = {
  easyTemplateSearch: dataSearch,
  easyTemplateAdd: dataAdd,
  easyTemplateDelete: dataDelete,
  easyTemplateEdit: dataEdit,
}
