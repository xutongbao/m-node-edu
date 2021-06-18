const categoryData = [
  {
    value: '1',
    label: '职业教育',
    children: [
      {
        value: '11',
        label: 'IT/互联网',
        children: [
          {
            value: '111',
            label: '电商运营',
          },
          {
            value: '112',
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