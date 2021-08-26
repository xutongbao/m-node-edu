const { customerInitValue, clueInitValue } = require('../utils/air')

let dataArr = [
  {
    id: '0',
    key: '0',
    path: '/light/index/content?id=0',
    title: '客户',
    table: {
      fields: [
        {
          id: 0,
          title: 'ID',
          dataIndex: 'id',
          isColumn: true,
          isSearch: false,
          isModalField: false,
          isSystem: true,
          orderIndex: 0,
        },

        {
          id: 3,
          title: '客户名称',   //表单里对应label
          dataIndex: 'name',  //表单里对应name
          type: 'formItem',
          rules: [
            {
              required: true,
              message: '请输入客户名称！',
            },
          ],
          formComponentName: 'Input',
          renderFunName: 'renderSpan',
          isHasRules: true,
          isHasPlaceHolder: true,
          isColumn: true,
          isSearch: true,
          isModalField: true,
          isSystem: false,
          orderIndex: 1,
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
          orderIndex: 101,
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
          orderIndex: 102,
        },
      ],
      dataArr: customerInitValue(),
    },
  },
  {
    id: '1',
    key: '1',
    path: '/light/index/content?id=1',
    title: '线索',
    table: {
      fields: [
        {
          id: 0,
          title: 'ID',
          dataIndex: 'id',
          isColumn: true,
          isSearch: false,
          isModalField: false,
          isSystem: true,
          orderIndex: 0,
        },
        {
          id: 3,
          title: '线索名称',   //表单里对应label
          dataIndex: 'name',  //表单里对应name
          type: 'formItem',
          rules: [
            {
              required: true,
              message: '请输入线索名称！',
            },
          ],
          formComponentName: 'Input',
          renderFunName: 'renderSpan',
          isHasRules: true,
          isHasPlaceHolder: true,
          isColumn: true,
          isSearch: true,
          isModalField: true,
          isSystem: false,
          orderIndex: 1,
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
          orderIndex: 101,
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
          orderIndex: 102,
        },
      ],
      dataArr: clueInitValue(),
    },
  },
]

module.exports = { dataArr }
