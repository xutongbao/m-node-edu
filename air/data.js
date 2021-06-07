let dataArr = [
  {
    id: 0,
    key: '0',
    path: '/light/index/content?id=0',
    title: '客户',
    table: {
      fields: [
        {
          title: 'ID',
          dataIndex: 'id',
          isColumn: true,
          isSearch: false,
          isAdd: false,
          isEdit: false,
          isCheck: false,
        },
        {
          title: '客户名称',   //表单里对应label
          dataIndex: 'name',  //表单里对应name
          rules: [
            {
              required: true,
              message: '请输入客户名称！',
            },
          ],
          formComponentName: 'Input',
          render: 'funName',
          isColumn: true,
          isSearch: true,
          isAdd: true,
          isEdit: true,
          isCheck: true,
        },
      ],
      dataArr: [],
    },
  },
  {
    id: 1,
    key: '1',
    path: '/light/index/content?id=1',
    title: '线索',
    table: {
      fields: [
        {
          title: 'ID',
          dataIndex: 'id',
          isColumn: true,
          isSearch: false,
          isAdd: false,
          isEdit: false,
          isCheck: false,
        },
        {
          title: '线索名称',   //表单里对应label
          dataIndex: 'name',  //表单里对应name
          rules: [
            {
              required: true,
              message: '请输入线索名称！',
            },
          ],
          formComponentName: 'Input',
          render: 'funName',
          isColumn: true,
          isSearch: true,
          isAdd: true,
          isEdit: true,
          isCheck: true,
        },
      ],
      dataArr: [],
    },
  },
]

module.exports = { dataArr }
