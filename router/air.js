const {
  routerSearchAll,
  routerSearch,
  routerAdd,
  routerDelete,
  routerEdit,
} = require('../air/app/router/router')

const {
  tableSearch,
  tableAdd,
  tableDelete,
  tableEdit,
} = require('../air/app/table/table')

const {
  fieldsSearchAll,
  fieldsSearch,
  fieldsAdd,
  fieldsDelete,
  fieldsEdit,
  fieldsEditAll,
} = require('../air/app/fields/fields')

const air = (app) => {
  //应用列表
  app.post('/api/app/list/searchAll', routerSearchAll)
  app.post('/api/app/list/search', routerSearch)
  app.post('/api/app/list/add', routerAdd)
  app.post('/api/app/list/delete', routerDelete)
  app.post('/api/app/list/edit', routerEdit)

  //应用内容
  app.post('/api/app/table/search', tableSearch)
  app.post('/api/app/table/add', tableAdd)
  app.post('/api/app/table/delete', tableDelete)
  app.post('/api/app/table/edit', tableEdit)

  //应用字段
  app.post('/api/app/fields/searchAll', fieldsSearchAll)
  app.post('/api/app/fields/search', fieldsSearch)
  app.post('/api/app/fields/add', fieldsAdd)
  app.post('/api/app/fields/delete', fieldsDelete)
  app.post('/api/app/fields/edit', fieldsEdit)
  app.post('/api/app/fields/editAll', fieldsEditAll)
}

module.exports = {
  air,
}
