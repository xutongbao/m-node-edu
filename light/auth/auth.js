let { authData } = require('./data')

//搜索
const dataSearch = (req, res) => {
  const { id = 19 } = req.body

  const tempData = authData.find(item => item.id === id)

  res.send({
    state: 1,
    data: (tempData && tempData.auth) ? tempData.auth : authData[0].auth,
    message: '搜索成功',
  })
}

const authRoleSearch = (req, res) => {
  const data = authData.map((item) => {
    const temp = { ...item }
    delete temp.auth
    return temp
  })
  res.send({
    state: 1,
    data,
    message: '角色',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { dataItem } = req.body
  authData = dataItem
  res.send({
    state: 1,
    data: authData,
    message: '编辑成功',
  })
}

module.exports = {
  authSearch: dataSearch,
  authEdit: dataEdit,
  authRoleSearch: authRoleSearch,
}
