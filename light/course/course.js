const Mock = require('mockjs')

//模拟其他值，例如审核状态这种非输入的字段，每次添加新数据时要带上
const mockOtherValue = () => {
  return Mock.mock({
    releaseStatus: () => Mock.Random.integer(0, 1),
    bdAuditStatus: () => Mock.Random.integer(0, 5), 
    shopListCount: () => Mock.Random.integer(0, 5),  
    isUp: () => Mock.Random.integer(0, 1),
  })
}

//这些初始值在mock的批量数据中是重复的
const addInitValues = {
  addtime: Date.now(),
  sale_name: '张三',
  belong: '测试',
  courseImage: 'http://test_img01-edu.gongzuoshouji.cn/company/20210310/2ef42a40a87b5f4b79366b7ff933aa9d.jpg',
  categoryForList: '三级分类名称',
  author: '管理员',
  openClass: [],
  seo: [],
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
const dataSearch = (req, res) => {
  const { pageNum = 1, pageSize = 10, searchParams = {} } = req.body
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
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  let temp = {...addInitValues, ...mockOtherValue(), ...dataItem, addtime: Date.now() }
  dataArr.unshift(temp)
  res.send({
    state: 1,
    data: temp,
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
    dataArr[index] = { id, ...dataItem, edittime: Date.now() }
    res.send({
      state: 1,
      data: dataArr[index],
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

// 状态操作
const dataUp = (req, res) => {
  const { id, isUp } = req.body

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataArr[index] = { ...dataArr[index], isUp: isUp , edittime: Date.now() }
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

// 添加开班信息
const courseOpenClassAdd = (req, res) => {
  const { id, dataItem } = req.body

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataItem.id = Date.now()
    dataItem.addtime = Date.now()
    dataItem.sort = 0
    const tempHonor =
      Array.isArray(dataArr[index].openClass) && dataArr[index].openClass.length === 0
        ? [dataItem]
        : [ dataItem, ...dataArr[index].openClass]
    dataArr[index] = {
      ...dataArr[index],
      openClass: tempHonor,
      updateTime: Date.now(),
    }
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

// 添加开班信息
const courseSeoAdd = (req, res) => {
  const { id, dataItem } = req.body

  let index = dataArr.findIndex((item) => item.id == id)
  if (index >= 0) {
    dataItem.id = Date.now()
    dataItem.addtime = Date.now()
    dataItem.sort = 0
    const tempHonor =
      Array.isArray(dataArr[index].seo) && dataArr[index].seo.length === 0
        ? [dataItem]
        : [ dataItem, ...dataArr[index].seo]
    dataArr[index] = {
      ...dataArr[index],
      seo: tempHonor,
      updateTime: Date.now(),
    }
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

module.exports = {
  courseSearch: dataSearch,
  courseAdd: dataAdd,
  courseDelete: dataDelete,
  courseEdit: dataEdit,
  courseUp: dataUp,
  courseOpenClassAdd,
  courseSeoAdd,
}