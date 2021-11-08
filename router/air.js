const {
  appListSearchAll,
  appListSearch,
  appListAdd,
  appListDelete,
  appListEdit,
} = require('../air/app/list/list')

const {
  appTableSearch,
  appTableAdd,
  appTableDelete,
  appTableEdit,
} = require('../air/app/table/table')

const {
  appFieldsSearchAll,
  appFieldsSearch,
  appFieldsAdd,
  appFieldsDelete,
  appFieldsEdit,
  appFieldsEditAll,
} = require('../air/app/fields/fields')

const air = (app) => {
  //#region 应用管理
  //应用列表
  app.post('/api/app/list/searchAll', appListSearchAll)
  app.post('/api/app/list/search', appListSearch)
  app.post('/api/app/list/add', appListAdd)
  app.post('/api/app/list/delete', appListDelete)
  app.post('/api/app/list/edit', appListEdit)

  //应用内容
  app.post('/api/app/table/search', appTableSearch)
  app.post('/api/app/table/add', appTableAdd)
  app.post('/api/app/table/delete', appTableDelete)
  app.post('/api/app/table/edit', appTableEdit)

  //应用字段
  app.post('/api/app/fields/searchAll', appFieldsSearchAll)
  app.post('/api/app/fields/search', appFieldsSearch)
  app.post('/api/app/fields/add', appFieldsAdd)
  app.post('/api/app/fields/delete', appFieldsDelete)
  app.post('/api/app/fields/edit', appFieldsEdit)
  app.post('/api/app/fields/editAll', appFieldsEditAll)
  //#endregion
}

module.exports = {
  air,
}
