const { uploadImgMulter, uploadImg } = require('../light/upload/upload')
const {
  login,
  loginEdu,
  logout,
  getUserInfo,
  getUserList,
} = require('../light/user/user')
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
  brandHonorAdd,
} = require('../light/brand/brand')
const {
  orgSearch,
  orgAdd,
  orgDelete,
  orgEdit,
  orgUp,
} = require('../light/org/org')
const {
  courseSearch,
  courseAdd,
  courseDelete,
  courseEdit,
  courseUp,
  courseOpenClassAdd,
  courseSeoAdd,
} = require('../light/course/course')
const { authSearch, authEdit, authRoleSearch } = require('../light/auth/auth')
const {
  logSearch,
  logAdd,
  logEmail,
  logDelete,
  logEdit,
  logStatus,
  logAction,
} = require('../light/log/log')

const {
  insightSearch,
  insightAdd,
  insightDelete,
  insightEdit,
  insightUp,
  insightDetail,
  insightFriends,
} = require('../light/insight/insight')

const {
  setItem,
  getItem,
} = require('../light/columns/columns')

const light = (app) => {
  //登录
  app.post('/api/login', login)
  //登录
  app.post('/edu/auth/login', loginEdu)
  //退出
  app.post('/api/logout', logout)
  //获取用户信息
  app.get('/api/getUserInfo', getUserInfo)
  //获取用户列表
  app.post('/api/getUserList', getUserList)
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
  app.post('/api/category', category)
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
  app.post('/api/brand/honor/add', brandHonorAdd)

  //机构账号
  app.post('/api/org/search', orgSearch)
  app.post('/api/org/add', orgAdd)
  app.post('/api/org/delete', orgDelete)
  app.post('/api/org/edit', orgEdit)
  app.post('/api/org/up', orgUp)

  //课程
  app.post('/api/course/search', courseSearch)
  app.post('/api/course/add', courseAdd)
  app.post('/api/course/delete', courseDelete)
  app.post('/api/course/edit', courseEdit)
  app.post('/api/course/up', courseUp)
  app.post('/api/course/openClass/add', courseOpenClassAdd)
  app.post('/api/course/seo/add', courseSeoAdd)

  //权限接口
  app.post('/api/auth/search', authSearch)
  app.post('/api/auth/edit', authEdit)
  app.post('/api/auth/role', authRoleSearch)

  //错误日志接口
  app.post('/api/log/search', logSearch)
  app.post('/api/log/add', logAdd)
  app.post('/api/log/email', logEmail)
  app.post('/api/log/delete', logDelete)
  app.post('/api/log/edit', logEdit)
  app.post('/api/log/status', logStatus)
  app.post('/api/log/action', logAction)

  //微信跟进页面的接口
  app.post('/api/insight/search', insightSearch)
  app.post('/api/insight/add', insightAdd)
  app.post('/api/insight/delete', insightDelete)
  app.post('/api/insight/edit', insightEdit)
  app.post('/api/insight/up', insightUp) 
  app.post('/api/insight/detail', insightDetail)  
  app.post('/api/insight/friends', insightFriends)

  //表格列显示隐藏，调整顺序的接口
  app.post('/api/columns/setItem', setItem)
  app.post('/api/columns/getItem', getItem)
}

module.exports = {
  light,
}
