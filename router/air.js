const {
  routerSearchAll,
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

const {
  fieldsSearchAll,
  fieldsSearch,
  fieldsAdd,
  fieldsDelete,
  fieldsEdit,
} = require('../air/fields/fields')

const air = (app) => {
  //应用接口
  app.post('/api/router/searchAll', routerSearchAll)
  app.post('/api/router/search', routerSearch)
  app.post('/api/router/add', routerAdd)
  app.post('/api/router/delete', routerDelete)
  app.post('/api/router/edit', routerEdit)

  //应用对应的表格接口
  app.post('/api/table/search', tableSearch)
  app.post('/api/table/add', tableAdd)
  app.post('/api/table/delete', tableDelete)
  app.post('/api/table/edit', tableEdit)

  //应用字段对应的表格接口
  app.post('/api/fields/searchAll', fieldsSearchAll)
  app.post('/api/fields/search', fieldsSearch)
  app.post('/api/fields/add', fieldsAdd)
  app.post('/api/fields/delete', fieldsDelete)
  app.post('/api/fields/edit', fieldsEdit)
}

module.exports = {
  air,
}
