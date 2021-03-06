const { mockCompany, companyInitValue } = require('../../utils/tools')

let dataArr = companyInitValue()

//搜索
const dataSearch = (req, res) => {
  const { page = 1, pageSize = 10, searchParams = {} } = req.body
  let list = [...dataArr]

  list = list.filter((item) => {
    let flag = true
    for (let key in searchParams) {
      if (
        typeof item[key] === 'string' &&
        !item[key].includes(searchParams[key])
      ) {
        flag = false
      } else if (
        typeof item[key] === 'number' &&
        !(item[key] === searchParams[key])
      ) {
        flag = false
      }
    }
    return flag
  })

  const start = (page - 1) * pageSize
  const end = start + pageSize * 1
  res.send({
    code: 200,
    data: {
      list: list.slice(start, end),
      total: list.length,
      current: page - 0,
      pageSize: pageSize - 0,
    },
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  dataArr.unshift({...dataItem, ...mockCompany()})
  res.send({
    code: 200,
    data: dataItem,
    message: '添加成功',
  })
}

//删除
const dataDelete = (req, res) => {
  let { ids } = req.body
  console.log(ids)
  dataArr = dataArr.filter((item) => !ids.includes(item.id))
  res.send({
    code: 200,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { id, dataItem } = req.body
  let index = dataArr.findIndex((item) => item.id === id)
  if (index >= 0) {
    dataArr[index] = { id, ...dataItem, updateTime: Date.now() }
    res.send({
      code: 200,
      data: dataItem,
      message: '编辑成功',
    })
  } else {
    res.send({
      code: 400,
      data: dataItem,
      message: '编辑失败，id不存在',
    })    
  }
}

//快速添加
const dataFastAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()
  dataArr.unshift({...dataItem, ...mockCompany()})
  res.send({
    code: 200,
    data: dataItem,
    message: '添加成功',
  })
}

module.exports = {
  companySearch: dataSearch,
  companyAdd: dataAdd,
  companyDelete: dataDelete,
  companyEdit: dataEdit,
  companyFastAdd: dataFastAdd,
}
