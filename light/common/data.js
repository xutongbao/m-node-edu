const categoryData = [
  {
    value: '职业教育',
    label: '职业教育',
    children: [
      {
        value: 'IT/互联网',
        label: 'IT/互联网',
        children: [
          {
            value: '电商运营',
            label: '电商运营',
          },
          {
            value: '产品经理',
            label: '产品经理',
          },          
        ],
      },
    ],
  },
]

const relatedBrandData = [
  {
    value: '0',
    title: '两个黄鹂'
  },
  {
    value: '1',
    title: '京佳教育'
  }
]

module.exports = {
  categoryData,
  relatedBrandData,
}