const router = [
  {
    title: '首页',
    isVisible: false,
    path: '/light/index/home',
  },
  {
    title: '基础管理',

    isVisible: true,
    key: '/light/index/baseMgt',
    children: [
      {
        title: '分类管理',

        isVisible: true,
        key: '/light/index/baseMgt/categoryMgt',
        children: [
          {
            title: '分类列表',

            isVisible: false,
            path: '/light/index/baseMgt/categoryMgt/categoryList',
          },
          {
            title: '模板列表Node',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/baseMgt/categoryMgt/templateList',
          },
          {
            title: '简单模板列表Node',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/baseMgt/categoryMgt/easyTemplateList',
          },
        ],
      },
      {
        title: '用户管理',

        isVisible: true,
        key: '/light/index/baseMgt/userMgt',
        children: [
          {
            title: '用户列表',

            isVisible: false,
            path: '/light/index/baseMgt/userMgt/userList',
          },
          {
            title: '角色列表',

            isVisible: true,
            path: '/light/index/baseMgt/userMgt/roleList',
          },
          {
            title: '权限列表',

            isVisible: true,
            path: '/light/index/baseMgt/userMgt/permissionList',
          },
          {
            title: '权限列表Node',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/baseMgt/userMgt/permissionListNode',
          },
        ],
      },
      {
        title: '平台管理',

        isVisible: true,
        key: '/light/index/baseMgt/platformMgt',
        children: [
          {
            title: '平台用户列表',

            isVisible: true,
            path: '/light/index/baseMgt/platformMgt/platformUserList',
          },
          {
            title: '渠道列表（不做）',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/baseMgt/platformMgt/channelList',
          },
        ],
      },
    ],
  },
  {
    title: '线下商户管理',

    isVisible: true,
    key: '/light/index/offline',
    children: [
      {
        title: '商户管理',

        isVisible: true,
        key: '/light/index/offline/companyMgt',
        children: [
          {
            title: '商户列表',

            isVisible: true,
            path: '/light/index/offline/companyMgt/companyList',
          },
          {
            title: '店铺列表',

            isVisible: true,
            path: '/light/index/offline/companyMgt/shopList',
          },
          {
            title: '测试Node',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/offline/companyMgt/testNode',
          },
          {
            title: '品牌列表',

            isVisible: true,
            path: '/light/index/offline/companyMgt/brandList',
          },
          {
            title: '账号列表',

            isVisible: true,
            path: '/light/index/offline/companyMgt/accountList',
          },
          {
            title: '店铺续费（不做）',

            isVisible: true,
            isDevMenu: true,
            path: '/light/index/offline/companyMgt/shopBuyList',
          },
        ],
      },
      {
        title: '物料管理',

        isVisible: true,
        key: '/light/index/offline/goodsMgt',
        children: [
          {
            title: '商户课程',

            isVisible: true,
            path: '/light/index/offline/goodsMgt/courseList',
          },
          {
            title: '老师列表',

            isVisible: true,
            path: '/light/index/offline/goodsMgt/teacherList',
          },
          {
            title: '添加老师列表',

            isVisible: true,
            hiddenMenu: false,
            path: '/light/index/offline/goodsMgt/addTeacherList',
          },
          {
            title: '评论列表',

            isVisible: true,
            path: '/light/index/offline/goodsMgt/commentList',
          },
          {
            title: '店铺攻略',

            isVisible: true,
            path: '/light/index/offline/goodsMgt/guideList',
          },
        ],
      },
      {
        title: '回收站',

        isVisible: true,
        key: '/light/index/offline/recycle',
        children: [
          {
            title: '商户删除列表',

            isVisible: true,
            path: '/light/index/offline/recycle/companyList',
          },
          {
            title: '店铺删除列表',

            isVisible: true,
            path: '/light/index/offline/recycle/shopList',
          },
          {
            title: '课程删除列表',

            isVisible: true,
            path: '/light/index/offline/recycle/courseList',
          },
          {
            title: '老师删除列表',

            isVisible: true,
            path: '/light/index/offline/recycle/teacherList',
          },
          {
            title: '攻略删除列表',

            isVisible: true,
            path: '/light/index/offline/recycle/guideList',
          },
        ],
      },
    ],
  },
  {
    title: '在线商户管理',

    isVisible: true,
    key: '/light/index/online',
    children: [
      {
        title: '商户管理',

        isVisible: true,
        key: '/light/index/online/companyMgt',
        children: [
          {
            title: '商户列表',

            isVisible: true,
            path: '/light/index/online/companyMgt/companyList',
          },
          {
            title: '商户资质',

            isVisible: true,
            path: '/light/index/online/companyMgt/payCertificateList',
          },
          {
            title: '品牌列表',

            isVisible: true,
            path: '/light/index/online/companyMgt/brandList',
          },
          {
            title: '兑换码配置',

            isVisible: true,
            path: '/light/index/online/companyMgt/exchangeCodeList',
          },
          {
            title: '账号列表',

            isVisible: true,
            path: '/light/index/online/companyMgt/accountList',
          },
        ],
      },
      {
        title: '物料管理',

        isVisible: true,
        key: '/light/index/online/goodsMgt',
        children: [
          {
            title: '商户课程',

            isVisible: true,
            path: '/light/index/online/goodsMgt/courseList',
          },
          {
            title: '老师列表',

            isVisible: true,
            path: '/light/index/online/goodsMgt/teacherList',
          },
          {
            title: '课程订单',

            isVisible: true,
            path: '/light/index/online/goodsMgt/courseOrderList',
          },
          {
            title: '用户兑换码管理',

            isVisible: true,
            path: '/light/index/online/goodsMgt/exchangeCodeList',
          },
        ],
      },
      {
        title: '回收站',

        isVisible: true,
        key: '/light/index/online/recycle',
        children: [
          {
            title: '商户删除列表',

            isVisible: true,
            path: '/light/index/online/recycle/companyList',
          },
          {
            title: '课程删除列表',

            isVisible: true,
            path: '/light/index/online/recycle/courseList',
          },
        ],
      },
    ],
  },
  {
    title: '线索管理',

    isVisible: true,
    key: '/light/index/clue',
    children: [
      {
        title: '线索列表',

        isVisible: true,
        path: '/light/index/clue/clueList',
      },
      {
        title: '通话录音',

        isVisible: true,
        path: '/light/index/clue/callRecorddList',
      },
      {
        title: '可视电话',

        isVisible: true,
        path: '/light/index/clue/videophone',
      },
    ],
  },
  {
    title: '直销管理',

    isVisible: true,
    key: '/light/index/sale',
    children: [
      {
        title: '用户管理',

        isVisible: true,
        key: '/light/index/sale/userMgt',
        children: [
          {
            title: '用户列表',

            isVisible: true,
            path: '/light/index/sale/userMgt/userList',
          },
        ],
      },
      {
        title: '线下商户',

        isVisible: true,
        key: '/light/index/sale/offline',
        children: [
          {
            title: '商户列表',

            isVisible: true,
            path: '/light/index/sale/offline/companyList',
          },
          {
            title: '店铺列表',

            isVisible: true,
            path: '/light/index/sale/offline/shopList',
          },
          {
            title: '合同列表',

            isVisible: true,
            path: '/light/index/sale/offline/contractList',
          },
          {
            title: '发票列表',

            isVisible: true,
            path: '/light/index/sale/offline/invoiceList',
          },
        ],
      },
      {
        title: '在线商户',

        isVisible: true,
        key: '/light/index/sale/online',
        children: [
          {
            title: '商户列表',

            isVisible: true,
            path: '/light/index/sale/online/shopList',
          },
        ],
      },
    ],
  },
  {
    title: '咨讯管理',

    isVisible: true,
    key: '/light/index/article',
    children: [
      {
        title: '咨讯列表',

        isVisible: true,
        path: '/light/index/article/articleList',
      },
    ],
  },
  {
    title: '财务管理',

    isVisible: true,
    key: '/light/index/finance',
    children: [
      {
        title: '线下财务',

        isVisible: true,
        key: '/light/index/finance/offline',
        children: [
          {
            title: '店铺代购',

            isVisible: true,
            path: '/light/index/finance/offline/orderList',
          },
          {
            title: '财务信息',

            isVisible: true,
            path: '/light/index/finance/offline/info',
          },
        ],
      },
      {
        title: '在线教育财务',

        isVisible: true,
        key: '/light/index/finance/online',
        children: [
          {
            title: '商户代购',

            isVisible: true,
            path: '/light/index/finance/online/orderList',
          },
          {
            title: '财务信息',

            isVisible: true,
            path: '/light/index/finance/online/info',
          },
        ],
      },
    ],
  },
  {
    title: '系统管理',

    isVisible: true,
    key: '/light/index/system',
    children: [
      {
        title: '虚拟号查询',

        isVisible: true,
        path: '/light/index/system/virtualList',
      },
      {
        title: '辅助工具',

        isVisible: true,
        path: '/light/index/system/tool',
      },
      {
        title: '系统消息',

        isVisible: true,
        path: '/light/index/system/messageList',
      },
      {
        title: '配置参数',

        isVisible: true,
        path: '/light/index/system/configList',
      },
    ],
  },
]

let authData = [
  {
    path: '/light/index/baseMgt',
  },
  {
    path: '/light/index/offline/companyMgt/testNode',
  },
  {
    path: '/light/index/baseMgt/categoryMgt/templateList',
    auth: [
      {
        title: '查看',
        name: 'check',
        isVisible: true
      },
      {
        title: '添加',
        name: 'add',
        isVisible: true,
      },
      {
        title: '按钮',
        name: 'btn',
        isVisible: false
      }
    ]
  }
]

module.exports = {
  router,
  authData,
}
