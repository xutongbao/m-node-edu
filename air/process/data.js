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
        content: '商之讯',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        color: 'blue',
        positon: {
          rolIndex: 1,
          colIndex: 2,
        },
        children: [
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 2,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 2,
                },
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: '1',
    key: '1',
    path: '/light/index/content?id=1',
    title: '报销',
    tree: [
      {
        name: '申请人',
        content: '商之讯',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        color: 'blue',
        positon: {
          rolIndex: 1,
          colIndex: 2,
        },
        children: [
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 1,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 1,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 3,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 3,
                },
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: '2',
    key: '2',
    path: '/light/index/content?id=2',
    title: '出差',
    tree: [
      {
        name: '申请人',
        content: '商之讯',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        color: 'blue',
        positon: {
          rolIndex: 1,
          colIndex: 4,
        },
        children: [
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 2,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 2,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 4,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 4,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 6,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 6,
                },
              },
            ],
          },
        ],
      },
    ]
  },
  {
    id: '3',
    key: '3',
    path: '/light/index/content?id=3',
    title: '活动',
    tree: [
      {
        name: '申请人',
        content: '商之讯',
        belongCategory: '0',
        status: true,
        id: 1622771045562,
        color: 'blue',
        positon: {
          rolIndex: 1,
          colIndex: 6,
        },
        children: [
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 3,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 3,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 5,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 5,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 7,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 7,
                },
              },
            ],
          },
          {
            name: '审批人',
            content: '申请人自选 不限范围 多选 依次审批',
            belongCategory: 1622771045562,
            status: false,
            id: 1622771052842,
            color: 'orange',
            positon: {
              rolIndex: 3,
              colIndex: 9,
            },
            children: [
              {
                name: '抄送人',
                content: '申请人自选',
                belongCategory: 1622771052842,
                status: false,
                id: 1636424256035,
                color: 'green',
                positon: {
                  rolIndex: 5,
                  colIndex: 9,
                },
              },
            ],
          },
        ],
      },
    ]
  }
]

module.exports = { dataArr }
