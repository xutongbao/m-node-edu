const { categoryData, relatedBrandData } = require('./data')

const category = (req, res) => {
  res.send({
    code: 200,
    data: categoryData,
    message: '所属分类',
  })
}

const relatedBrand = (req, res) => {
  res.send({
    code: 200,
    data: relatedBrandData,
    message: '关联品牌'
  })
}

module.exports = {
  category,
  relatedBrand,
}
