// 全局替换一次 template
// 替换完复制，不要保存，以后还要使用


module.exports = {
  templateSearch: dataSearch,
  templateAdd: dataAdd,
  templateDelete: dataDelete,
  templateEdit: dataEdit,
  templateUp: dataUp,
}

const {
  templateSearch,
  templateAdd,
  templateDelete,
  templateEdit,
  templateUp,
} = require('../light/template/template')

const light = (app) => {
  //模板页面的接口
  app.post('/api/template/search', templateSearch)
  app.post('/api/template/add', templateAdd)
  app.post('/api/template/delete', templateDelete)
  app.post('/api/template/edit', templateEdit)
  app.post('/api/template/up', templateUp)
}
