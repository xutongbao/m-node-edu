const { uploadImgMulter, uploadImg } = require('../light/upload/upload')
const {
  login,
  loginEdu,
  logout,
  getCode,
  getUserInfo,
  getUserList,
  register,
  registerCompany,
} = require('../light/user/user')
const {
  shopSearch,
  shopAdd,
  shopDelete,
  shopEdit,
  shopOpenClueSms,
  shopCopy,
  shopIMAdd
} = require('../light/shop/shop')
const {
  companySearch,
  companyAdd,
  companyDelete,
  companyEdit,
  companyFastAdd
} = require('../light/company/company')
const {
  templateSearch,
  templateAdd,
  templateDelete,
  templateEdit,
  templateUp
} = require('../light/template/template')
const {
  easyTemplateSearch,
  easyTemplateAdd,
  easyTemplateDelete,
  easyTemplateEdit
} = require('../light/template/easyTemplate')
const { category, relatedBrand } = require('../light/common/common')
const {
  categorySearch,
  categoryAdd,
  categoryDelete,
  categoryEdit
} = require('../light/baseMgt/category/category')
const {
  brandSearch,
  brandAdd,
  brandDelete,
  brandEdit,
  brandUp,
  brandHonorAdd
} = require('../light/brand/brand')
const {
  orgSearch,
  orgAdd,
  orgDelete,
  orgEdit,
  orgUp
} = require('../light/org/org')
const {
  courseSearch,
  courseAdd,
  courseDelete,
  courseEdit,
  courseUp,
  courseOpenClassAdd,
  courseSeoAdd
} = require('../light/course/course')
const { authSearch, authEdit, authRoleSearch } = require('../light/auth/auth')
const {
  logSearch,
  logAdd,
  logEmail,
  logDelete,
  logEdit,
  logStatus,
  logAction
} = require('../light/log/log')

const {
  insightSearch,
  insightAdd,
  insightDelete,
  insightEdit,
  insightUp,
  insightDetail,
  insightFriends
} = require('../light/insight/insight')

const {
  jenkinsSearch,
  jenkinsAdd,
  jenkinsDelete,
  jenkinsEdit,
  jenkinsRun,
  jenkinsGetPort,
  jenkinsRestart,
  refreshLogReport,
  jenkinsUploadCode,
  jenkinsUploadCodeForLunux,
} = require('../light/jenkins/jenkins')

const {
  statisticsSearch
} = require('../light/statistics/statistics')

const { setItem, getItem } = require('../light/columns/columns')

const { csdnSearch, csdnSitemap } = require('../csdn/csdn')

const { emailCustomSend } = require('../light/email/email')

const { shopReportSearch } = require('../light/shopReport/shopReport')

const light = (app) => {
  //??????
  app.post('/api/login', login)
  //??????
  app.post('/edu/auth/login', loginEdu)
  //??????
  app.post('/api/logout', logout)
  app.post('/api/getCode', getCode)
  //??????????????????
  app.get('/api/getUserInfo', getUserInfo)
  //??????????????????
  app.post('/api/getUserList', getUserList)
  //??????
  app.post('/api/register', register)
  app.post('/api/registerCompany', registerCompany)
  //??????
  app.post('/api/upload', uploadImgMulter.single('file'), uploadImg)
  //??????
  app.post('/api/shop/search', shopSearch)
  app.post('/api/shop/add', shopAdd)
  app.post('/api/shop/delete', shopDelete)
  app.post('/api/shop/edit', shopEdit)
  app.post('/api/shop/openClueSms', shopOpenClueSms)
  app.post('/api/shop/copy', shopCopy)
  app.post('/api/shop/grounding', shopCopy) //??????
  app.post('/api/shop/submitShop', shopCopy) //??????????????????
  app.post('/api/shop/submitGoods', shopCopy) //??????????????????
  app.post('/api/shop/IMAdd', shopIMAdd) // ?????????????????????????????????
  app.post('/api/shop/submitIM', shopCopy) //??????IM
  //?????????????????????
  app.post('/api/template/search', templateSearch)
  app.post('/api/template/add', templateAdd)
  app.post('/api/template/delete', templateDelete)
  app.post('/api/template/edit', templateEdit)
  app.post('/api/template/up', templateUp)
  //???????????????????????????
  app.post('/api/easyTemplate/search', easyTemplateSearch)
  app.post('/api/easyTemplate/add', easyTemplateAdd)
  app.post('/api/easyTemplate/delete', easyTemplateDelete)
  app.post('/api/easyTemplate/edit', easyTemplateEdit)
  //??????
  app.post('/api/company/search', companySearch)
  app.post('/api/company/add', companyAdd)
  app.post('/api/company/delete', companyDelete)
  app.post('/api/company/edit', companyEdit)
  app.post('/api/company/fastAdd', companyFastAdd)
  //????????????
  app.post('/api/category', category)
  app.get('/api/relatedBrand', relatedBrand)

  //????????????-????????????-????????????
  app.post('/api/category/search', categorySearch)
  app.post('/api/category/add', categoryAdd)
  app.post('/api/category/delete', categoryDelete)
  app.post('/api/category/edit', categoryEdit)

  //???????????????????????????
  app.post('/api/brand/search', brandSearch)
  app.post('/api/brand/add', brandAdd)
  app.post('/api/brand/delete', brandDelete)
  app.post('/api/brand/edit', brandEdit)
  app.post('/api/brand/up', brandUp)
  app.post('/api/brand/honor/add', brandHonorAdd)

  //????????????
  app.post('/api/org/search', orgSearch)
  app.post('/api/org/add', orgAdd)
  app.post('/api/org/delete', orgDelete)
  app.post('/api/org/edit', orgEdit)
  app.post('/api/org/up', orgUp)

  //??????
  app.post('/api/course/search', courseSearch)
  app.post('/api/course/add', courseAdd)
  app.post('/api/course/delete', courseDelete)
  app.post('/api/course/edit', courseEdit)
  app.post('/api/course/up', courseUp)
  app.post('/api/course/openClass/add', courseOpenClassAdd)
  app.post('/api/course/seo/add', courseSeoAdd)

  //????????????
  app.post('/api/auth/search', authSearch)
  app.post('/api/auth/edit', authEdit)
  app.post('/api/auth/role', authRoleSearch)

  //??????????????????
  app.post('/api/log/search', logSearch)
  app.post('/api/log/add', logAdd)
  app.post('/api/log/email', logEmail)
  app.post('/api/log/delete', logDelete)
  app.post('/api/log/edit', logEdit)
  app.post('/api/log/status', logStatus)
  app.post('/api/log/action', logAction)

  //???????????????????????????
  app.post('/api/insight/search', insightSearch)
  app.post('/api/insight/add', insightAdd)
  app.post('/api/insight/delete', insightDelete)
  app.post('/api/insight/edit', insightEdit)
  app.post('/api/insight/up', insightUp)
  app.post('/api/insight/detail', insightDetail)
  app.post('/api/insight/friends', insightFriends)

  //?????????????????????????????????????????????
  app.post('/api/columns/setItem', setItem)
  app.post('/api/columns/getItem', getItem)

  //csdn
  app.post('/api/csdn/search', csdnSearch)
  app.post('/api/csdn/sitemap', csdnSitemap)

  //?????????????????????
  app.post('/api/jenkins/search', jenkinsSearch)
  app.post('/api/jenkins/add', jenkinsAdd)
  app.post('/api/jenkins/delete', jenkinsDelete)
  app.post('/api/jenkins/edit', jenkinsEdit)
  //app.post('/api/jenkins/run', jenkinsRun)
  //app.post('/api/jenkins/getPort', jenkinsGetPort)
  //app.post('/api/jenkins/restart', jenkinsRestart)
  //app.post('/api/jenkins/refreshLogReport', refreshLogReport)
  //app.post('/api/jenkins/uploadCode', jenkinsUploadCode)
  //app.post('/api/jenkins/uploadCodeForLinux', jenkinsUploadCodeForLunux)

  //????????????
  app.post('/api/email/customSend', emailCustomSend)

  //????????????
  app.post('/api/shopReport/search', shopReportSearch)

  //??????
  app.post('/api/statistics/search', statisticsSearch)  
}

module.exports = {
  light
}
