// 全局替换一次 log
// 替换完复制，不要保存，以后还要使用


module.exports = {
  logSearch: dataSearch,
  logAdd: dataAdd,
  logDelete: dataDelete,
  logEdit: dataEdit,
  logUp: dataUp,
}

const {
  logSearch,
  logAdd,
  logDelete,
  logEdit,
  logUp,
} = require('../light/log/log')

const light = (app) => {
  //模板页面的接口
  app.post('/api/log/search', logSearch)
  app.post('/api/log/add', logAdd)
  app.post('/api/log/delete', logDelete)
  app.post('/api/log/edit', logEdit)
  app.post('/api/log/up', logUp)
}
