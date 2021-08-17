const Mock = require('mockjs')
const moment = require('moment')

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
  let date = []
  let user = []

  for (let i = 0; i < 100; i++) {
    //这些值在mock的批量数据中是随机的
    const temp = Mock.mock({
      name: '@cname',
      date: moment().subtract(i, 'day').format('YYYY-MM-DD'),
      friendsTotalCount: () => Mock.Random.integer(0, 10), //好友总数
      addFriendsCount: () => Mock.Random.integer(0, 10), //新增好友
      applyCount: () => Mock.Random.integer(0, 10), //发起申请
      followFirendsCount: () => Mock.Random.integer(0, 10), //跟进好友-新
      followFirendsRate: () => Mock.Random.integer(0, 10), //跟进率-新
      effectiveCommunicationRate: () => Mock.Random.integer(0, 10), //有效沟通率-新
      sensitiveWordsCount: () => Mock.Random.integer(0, 10),
      tempCount: () => Mock.Random.integer(0, 10),
    })
    date.push({ ...addInitValues, ...temp, ...mockOtherValue(), id: i + 1 })
  }

  for (let i = 0; i < 100; i++) {
    //这些值在mock的批量数据中是随机的
    const temp = Mock.mock({
      name: '@cname',
      addFriendsCount: () => Mock.Random.integer(0, 10),
      applyCount: () => Mock.Random.integer(0, 10),
      sensitiveWordsCount: () => Mock.Random.integer(0, 10),
      tempCount: () => Mock.Random.integer(0, 10),
    })
    user.push({ ...addInitValues, ...temp, ...mockOtherValue(), id: i + 1 })
  }

  return {
    date: date,
    user: user,
  }
}

let dataArr = initValue()

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
  let temp = {
    ...addInitValues,
    ...mockOtherValue(),
    ...dataItem,
    addtime: Date.now(),
  }
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

const dataDetail = (req, res) => {
  const { id } = req.body
  res.send({
    state: 1,
    data: {
      addCustomerList: [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ],
      sensitiveWordsList: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        }
      ]
    },
    message: '搜索成功',
  })
}

module.exports = {
  insightSearch: dataSearch,
  insightAdd: dataAdd,
  insightDelete: dataDelete,
  insightEdit: dataEdit,
  insightUp: dataUp,
  insightDetail: dataDetail,
}
