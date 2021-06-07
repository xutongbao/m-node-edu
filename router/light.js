const { uploadImgMulter, uploadImg } = require('../light/upload/upload')
const { login, loginEdu, getUserInfo } = require('../light/user/user')
const {
  shopSearch,
  shopAdd,
  shopDelete,
  shopEdit,
} = require('../light/shop/shop')
const {
  companySearch,
  companyAdd,
  companyDelete,
  companyEdit,
  companyFastAdd,
} = require('../light/company/company')
const {
  templateSearch,
  templateAdd,
  templateDelete,
  templateEdit,
} = require('../light/template/template')
const {
  easyTemplateSearch,
  easyTemplateAdd,
  easyTemplateDelete,
  easyTemplateEdit,
} = require('../light/template/easyTemplate')
const { category, relatedBrand } = require('../light/common/common')
const {
  categorySearch,
  categoryAdd,
  categoryDelete,
  categoryEdit,
} = require('../light/baseMgt/category/category')

const light = (app) => {
  //登录
  app.post('/api/login', login)
  //登录
  app.post('/edu/login', loginEdu)
  //获取用户信息
  app.get('/api/getUserInfo', getUserInfo)
  //上传
  app.post('/api/upload', uploadImgMulter.single('img'), uploadImg)
  //店铺
  app.post('/api/shop/search', shopSearch)
  app.post('/api/shop/add', shopAdd)
  app.post('/api/shop/delete', shopDelete)
  app.post('/api/shop/edit', shopEdit)
  //模板页面的接口
  app.post('/api/template/search', templateSearch)
  app.post('/api/template/add', templateAdd)
  app.post('/api/template/delete', templateDelete)
  app.post('/api/template/edit', templateEdit)
  //简单模板页面的接口
  app.post('/api/easyTemplate/search', easyTemplateSearch)
  app.post('/api/easyTemplate/add', easyTemplateAdd)
  app.post('/api/easyTemplate/delete', easyTemplateDelete)
  app.post('/api/easyTemplate/edit', easyTemplateEdit)
  //商户
  app.post('/api/company/search', companySearch)
  app.post('/api/company/add', companyAdd)
  app.post('/api/company/delete', companyDelete)
  app.post('/api/company/edit', companyEdit)
  app.post('/api/company/fastAdd', companyFastAdd)
  //所属分类
  app.get('/api/category', category)
  app.get('/api/relatedBrand', relatedBrand)

  //基础管理-分类管理-分类列表
  app.post('/api/category/search', categorySearch)
  app.post('/api/category/add', categoryAdd)
  app.post('/api/category/delete', categoryDelete)
  app.post('/api/category/edit', categoryEdit)
}

module.exports = {
  light,
}
