let { dataArr } = require('../data')

//搜索
const dataSearch = (req, res) => {
  const data = dataArr.map(item => {
    return {
      id: item.id,
      key: item.key,
      path: item.path,
      title: item.title,
    }
  })
  res.send({
    code: 200,
    data,
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  dataItem.path += `?id=${dataItem.id}`
  dataItem.key = dataItem.id
  dataItem.table = {
    fields: [
      {
        id: 0,
        title: 'ID',
        dataIndex: 'id',
        isColumn: true,
        isSearch: false,
        isModalField: false,
        isSystem: true,
      },
      {
        id: 1,
        title: '创建时间',
        dataIndex: 'createTime',
        renderFunName: 'renderDatetime',
        isColumn: true,
        isSearch: false,
        isModalField: false,
        isSystem: true,
      },
      {
        id: 2,
        title: '更新时间',
        dataIndex: 'updateTime',
        renderFunName: 'renderDatetime',
        isColumn: true,
        isSearch: false,
        isModalField: false,
        isSystem: true,
      }
    ],
    dataArr: [],
  }
  dataArr.push({ ...dataItem })
  res.send({
    code: 200,
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
    code: 200,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { id, dataItem } = req.body
  let index = dataArr.findIndex((item) => item.id === id)
  if (index >= 0) {
    dataArr[index] = { id, ...dataItem }
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
  routerSearch: dataSearch,
  routerAdd: dataAdd,
  routerDelete: dataDelete,
  routerEdit: dataEdit,
}
