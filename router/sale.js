const {
  companySearch,
  companyAdd,
  companyDelete,
  companyEdit,
  companyUp,
} = require('../sale/company/company')

const sale = (app) => {
  //商户
  app.post('/api/sale/company/search', companySearch)
  app.post('/api/sale/company/add', companyAdd)
  app.post('/api/sale/company/delete', companyDelete)
  app.post('/api/sale/company/edit', companyEdit)
  app.post('/api/sale/company/up', companyUp)
}

module.exports = {
  sale,
}