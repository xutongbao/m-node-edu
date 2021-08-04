
let authData = [
  {
    id: 19,
    title: '管理员',
    auth: [{
      path: '/light/index/baseMgt/categoryMgt/templateList',
      auth: [
        {
          title: '查看',
          name: 'check',
          isVisible: true,
        },
        {
          title: '添加',
          name: 'add',
          isVisible: true,
        },
        {
          title: '按钮',
          name: 'btn',
          isVisible: false,
        },
      ],
    }],
  },
  {
    id: 22,
    title: '客服',
    auth: [{
      path: '/light/index/baseMgt/categoryMgt/templateList',
      auth: [
        {
          title: '查看',
          name: 'check',
          isVisible: true,
        },
        {
          title: '添加',
          name: 'add',
          isVisible: true,
        },
        {
          title: '按钮',
          name: 'btn',
          isVisible: false,
        },
      ],
    }],
  },
]

module.exports = {
  authData,
}
