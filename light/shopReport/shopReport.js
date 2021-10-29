const Mock = require('mockjs')

//模拟其他值，例如审核状态这种非输入的字段，每次添加新数据时要带上
const mockOtherValue = () => {
  return Mock.mock({
    courseCount: () => Mock.Random.integer(0, 10),
    days: () => Mock.Random.integer(0, 5),
    field1: () => Mock.Random.integer(90, 100),
    field2: () => Mock.Random.integer(90, 100),
    field3: () => Mock.Random.integer(90, 100),
    field4: () => Mock.Random.integer(90, 100),
    field5: () => Mock.Random.integer(90, 100),
    field6: () => Mock.Random.integer(90, 100),
    field7: () => Mock.Random.integer(90, 100),
    field8: () => Mock.Random.integer(90, 100),
    field9: () => Mock.Random.integer(90, 100),
    field10: () => Mock.Random.integer(90, 100),
  })
}

//这些初始值在mock的批量数据中是重复的
const addInitValues = {
  shopId: 4863,
  companyId: 582,
  shopName: '文都考研（宝鸡分校）',
  companyName: '文都教育',
  authStartTime: '0000-00-00',
  authEndTime: '0000-00-00',
  cateid3Name:
    '考研其他,在职研修,在职研究生,艺术考研,医学考研,新闻学考研,心理学考研,考研政治,考研英语,考研数学,MBA考试,经济学考研,金融硕士考研,教育学考研,计算机考研,会计考研,管理学考研,法学考研,博士,MPA考试',
  address:
    ' 陕西省宝鸡市宝鸡文理学院校内体育场15号\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t',
  certificateNum: 13,
  courseVideoNum: 0,
  shopVideoNum: 1,
  teacherNum: 0,
  courseNum: 0,
  commentNum: 0,
  guideNum: 0,


  //自己添加的
  area: '北京市-海淀区'
}

const initValue = () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    //这些值在mock的批量数据中是随机的
    const temp = Mock.mock({
      name: '@cname'
    })
    arr.push({ ...addInitValues, ...temp, ...mockOtherValue(), id: i + 1 })
  }

  return arr
}

let dataArr = initValue()

//搜索
const dataSearch = (req, res) => {
  const { pageNum = 1, pageSize = 10 } = req.body
  let list = [...dataArr]

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
      pageSize: pageSize - 0
    },
    message: '搜索成功'
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  let temp = {
    ...addInitValues,
    ...mockOtherValue(),
    ...dataItem,
    addtime: Date.now()
  }
  dataArr.unshift(temp)
  res.send({
    state: 1,
    data: temp,
    message: '添加成功'
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
    message: '删除成功'
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
      message: '编辑成功'
    })
  } else {
    res.send({
      state: 0,
      data: dataItem,
      message: '编辑失败，id不存在'
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
  shopReportSearch: dataSearch
}
