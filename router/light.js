const { uploadImgMulter, uploadImg } = require('../light/upload/upload')
const { login, loginEdu, logout, getUserInfo } = require('../light/user/user')
const {
  shopSearch,
  shopAdd,
  shopDelete,
  shopEdit,
  shopOpenClueSms,
  shopCopy,
  shopIMAdd,
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
  templateUp,
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
const {
  brandSearch,
  brandAdd,
  brandDelete,
  brandEdit,
  brandUp,
} = require('../light/brand/brand')

const light = (app) => {
  //登录
  app.post('/api/login', login)
  //登录
  app.post('/edu/auth/login', loginEdu)
  //退出
  app.post('/edu/auth/logout', logout)
  //获取用户信息
  app.get('/api/getUserInfo', getUserInfo)
  //上传
  app.post('/api/upload', uploadImgMulter.single('img'), uploadImg)
  //店铺
  app.post('/api/shop/search', shopSearch)
  app.post('/api/shop/add', shopAdd)
  app.post('/api/shop/delete', shopDelete)
  app.post('/api/shop/edit', shopEdit)
  app.post('/api/shop/openClueSms', shopOpenClueSms)
  app.post('/api/shop/copy', shopCopy)
  app.post('/api/shop/grounding', shopCopy) //上架
  app.post('/api/shop/submitShop', shopCopy) //提交百度审核
  app.post('/api/shop/submitGoods', shopCopy) //提交补充物料
  app.post('/api/shop/IMAdd', shopIMAdd) // 添加、编辑共用一个接口
  app.post('/api/shop/submitIM', shopCopy) //提交IM
  //模板页面的接口
  app.post('/api/template/search', templateSearch)
  app.post('/api/template/add', templateAdd)
  app.post('/api/template/delete', templateDelete)
  app.post('/api/template/edit', templateEdit)
  app.post('/api/template/up', templateUp)
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

  //品牌列表页面的接口
  app.post('/api/brand/search', brandSearch)
  app.post('/api/brand/add', brandAdd)
  app.post('/api/brand/delete', brandDelete)
  app.post('/api/brand/edit', brandEdit)
  app.post('/api/brand/up', brandUp)
}

module.exports = {
  light,
}
