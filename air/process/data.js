const { customerInitValue, clueInitValue } = require('../../utils/air')

let dataArr = [
  {
    id: '0',
    key: '0',
    path: '/light/index/content?id=0',
    title: '请假',
    tree: [
      {
        name: '申请人',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        children: [
          {
            name: '审批人',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            children: [
              {
                name: '抄送人',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '1',
    key: '1',
    path: '/light/index/content?id=1',
    title: '报销',
    tree: [
      {
        name: '流程开始',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        children: [
          {
            name: '审批人',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            children: [
              {
                name: '抄送人',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: '2',
    key: '2',
    path: '/light/index/content?id=2',
    title: '出差',
    tree: [
      {
        name: '流程起点',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        children: [
          {
            name: '审批人',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            children: [
              {
                name: '抄送人',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035
              }
            ]
          }
        ]
      }
    ]
  }
]

module.exports = { dataArr }
