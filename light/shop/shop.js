const { mockShop, shopInitValue } = require('../../utils/tools')

let dataArr = shopInitValue()

//搜索
const dataSearch = (req, res) => {
  const { page = 1, pageSize = 10, searchParams = {} } = req.body
  let list = [...dataArr]

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
  res.send({
    state: 1,
    data: {
      list: list.slice(start, end),
      total: list.length,
      current: page - 0,
      pageSize: pageSize - 0,
    },
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  dataArr.unshift({...dataItem, ...mockShop()})
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

// 开启线索短信
const shopOpenClueSms = (req, res) => {
  const { id, type } = req.query

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataArr[index] = { ...dataArr[index], isOpenClueSms: type === 'open' , updateTime: Date.now() }
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

// 复制店铺
const shopCopy = (req, res) => {
  const { id } = req.query

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
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

// 新增IM组件
const shopIMAdd = (req, res) => {
  const { id, dataItem } = req.body

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataArr[index] = { ...dataArr[index], IM: dataItem , updateTime: Date.now() }
    res.send({
      state: 1,
      data: {},
      message: 'IM添加成功',
    })
  } else {
    res.send({
      state: 0,
      data: {},
      message: 'id不存在',
    })    
  }
}

module.exports = {
  shopSearch: dataSearch,
  shopAdd: dataAdd,
  shopDelete: dataDelete,
  shopEdit: dataEdit,
  shopOpenClueSms,
  shopCopy,
  shopIMAdd,
}
