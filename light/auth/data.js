
let authData = [
  {
    title: '管理员',
    role: 'admin',
    auth: {
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
    },
  },
  {
    title: '项目经理',
    role: 'manager',
    auth: {
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
    },
  },
]

module.exports = {
  authData,
}
