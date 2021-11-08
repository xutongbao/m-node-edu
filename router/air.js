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

const {
  processListSearchAll,
  processListSearch,
  processListAdd,
  processListDelete,
  processListEdit,
} = require('../air/process/list/list')

const {
  processTableSearch,
  processTableAdd,
  processTableDelete,
  processTableEdit,
} = require('../air/process/table/table')

const {
  processFieldsSearchAll,
  processFieldsSearch,
  processFieldsAdd,
  processFieldsDelete,
  processFieldsEdit,
  processFieldsEditAll,
} = require('../air/process/fields/fields')

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

  //#region 流程管理
  //应用列表
  app.post('/api/process/list/searchAll', processListSearchAll)
  app.post('/api/process/list/search', processListSearch)
  app.post('/api/process/list/add', processListAdd)
  app.post('/api/process/list/delete', processListDelete)
  app.post('/api/process/list/edit', processListEdit)

  //应用内容
  app.post('/api/process/table/search', processTableSearch)
  app.post('/api/process/table/add', processTableAdd)
  app.post('/api/process/table/delete', processTableDelete)
  app.post('/api/process/table/edit', processTableEdit)

  //应用字段
  app.post('/api/process/fields/searchAll', processFieldsSearchAll)
  app.post('/api/process/fields/search', processFieldsSearch)
  app.post('/api/process/fields/add', processFieldsAdd)
  app.post('/api/process/fields/delete', processFieldsDelete)
  app.post('/api/process/fields/edit', processFieldsEdit)
  app.post('/api/process/fields/editAll', processFieldsEditAll)
  //#endregion
}

module.exports = {
  air,
}
