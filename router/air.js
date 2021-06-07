const {
  routerSearch,
  routerAdd,
  routerDelete,
  routerEdit,
} = require('../air/router/router')

const {
  tableSearch,
  tableAdd,
  tableDelete,
  tableEdit,
} = require('../air/table/table')

const air = (app) => {
  //应用接口
  app.post('/api/router/search', routerSearch)
  app.post('/api/router/add', routerAdd)
  app.post('/api/router/delete', routerDelete)
  app.post('/api/router/edit', routerEdit)

  //应用对应的表格接口
  app.post('/api/table/search', tableSearch)
  app.post('/api/table/add', tableAdd)
  app.post('/api/table/delete', tableDelete)
  app.post('/api/table/edit', tableEdit)
}

module.exports = {
  air,
}
