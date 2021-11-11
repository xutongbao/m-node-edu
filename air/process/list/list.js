let { dataArr } = require('../data')
const { v4: uuidv4 } = require('uuid')

//调试用，返回全部数据
const dataSearchAll = (req, res) => {
  console.log('air dataSearchAll')
  res.send({
    code: 200,
    data: dataArr,
    message: '搜索成功'
  })
}

//搜索
const dataSearch = (req, res) => {
  const data = dataArr.map((item) => {
    return {
      id: item.id,
      key: item.key,
      path: item.path,
      title: item.title
    }
  })
  console.log('air dataSearch')
  res.send({
    code: 200,
    data,
    message: '搜索成功'
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = uuidv4()
  dataItem.path += `?id=${dataItem.id}`
  dataItem.key = dataItem.id
  dataItem.tree = [
    {
      name: '流程起点',
      belongCategory: '0',
      status: true,
      id: 1622771045569
    }
  ]
  dataArr.push({ ...dataItem })
  res.send({
    code: 200,
    data: dataItem,
    message: '添加成功'
  })
}

//删除
const dataDelete = (req, res) => {
  let { ids } = req.body
  console.log(ids)
  dataArr = dataArr.filter((item) => !ids.includes(item.id))
  res.send({
    code: 200,
    data: ids,
    message: '删除成功'
  })
}

//编辑
const dataEdit = (req, res) => {
  let { id, dataItem } = req.body
  let index = dataArr.findIndex((item) => item.id === id)
  if (index >= 0) {
    dataArr[index].title = dataItem.title
    //dataArr[index] = { id, ...dataItem }
    res.send({
      code: 200,
      data: dataItem,
      message: '编辑成功'
    })
  } else {
    res.send({
      code: 400,
      data: dataItem,
      message: '编辑失败，id不存在'
    })
  }
}

module.exports = {
  processListSearchAll: dataSearchAll,
  processListSearch: dataSearch,
  processListAdd: dataAdd,
  processListDelete: dataDelete,
  processListEdit: dataEdit
}
