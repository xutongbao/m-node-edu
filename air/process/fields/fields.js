let { dataArr } = require('../data')


//添加函数，如果不是一级分类，就递归遍历所有children，找到他的所属分类并添加
const addFunWrap = (dataItem) => {
  //belongCategory==='0'代表一级分类
  if (dataItem.belongCategory === '0') {
    dataArr.push({ ...dataItem })
    return () => {}
  } else {
    const addFun = (arr, belongCategory) => {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].children) {
          addFun(arr[i].children, belongCategory)
        }
        if (arr[i].id === belongCategory) {
          if (arr[i].children && arr[i].children.length > 0) {
            arr[i].children.push(dataItem)
          } else {
            arr[i].children = [dataItem]
          }
        }
      }
    }

    return addFun
  }
}


//编辑或删除后，children可能为空，及时删除children
const deleteEmptyChildrenFunWrap = (tree) => {
  const deleteEmptyChildrenFun = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        deleteEmptyChildrenFun(arr[i].children)
      }
      if (arr[i].children && arr[i].children.length === 0) {
        delete arr[i].children
      }
    }
  }

  return deleteEmptyChildrenFun(tree)
}

//编辑函数，递归遍历所有children，找到他的对应的id并编辑
const editFunWrap = (dataItem, tree) => {
  const editFun = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        editFun(arr[i].children, id)
      }
      if (arr[i].id === id) {
        //编辑时没有修改所属分类
        if (arr[i].belongCategory === dataItem.belongCategory) {
          arr[i] = { id, ...dataItem, updateTime: Date.now(), children: arr[i].children }
        } else {
          //删除当前的，这块需要改一改，不能把children删了
          const deleteItem = arr.splice(i, 1)
          if (arr.length === 0) {
            deleteEmptyChildrenFunWrap(tree)
          }
          if (Array.isArray(deleteItem) && deleteItem.length > 0 && Array.isArray(deleteItem[0].children) && deleteItem[0].children.length > 0) {
            dataItem.children = deleteItem[0].children
          }
          //重新添加一个新的
          addFunWrap(dataItem)(tree, dataItem.belongCategory)
        }
      }
    }
  }
  return editFun
}

//删除函数，递归遍历所有children，找到他的对应的id并编辑
const deleteFunWrap = (id, tree) => {
  const deleteFun = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        deleteFun(arr[i].children)
      }
      if (arr[i].id === id) {
        //删除当前的
        arr.splice(i, 1)
        if (arr.length === 0) {
          deleteEmptyChildrenFunWrap(tree)
        }
      }
    }
  }
  deleteFun(tree)
}


//调试用，返回全部数据
const dataSearchAll = (req, res) => {
  res.send({
    code: 200,
    data: dataArr,
    message: '搜索成功',
  })
}

//搜索
const dataSearch = (req, res) => {
  const { tableId } = req.body
  const application = dataArr.find((item) => item.id === tableId)
  res.send({
    code: 200,
    data: {
      ...application
    },
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { tableId, dataItem } = req.body
  console.log('add')
  const index = dataArr.findIndex((item) => item.id === tableId)
  dataItem.id = Date.now()
  const tree = dataArr[index].tree

  addFunWrap(dataItem)(tree, dataItem.belongCategory)

  res.send({
    code: 200,
    data: dataItem,
    message: '添加成功',
  })
}

//删除
const dataDelete = (req, res) => {
  let { tableId, id } = req.body
  const tableIndex = dataArr.findIndex((item) => item.id === tableId)
  console.log(id)
  // dataArr[tableIndex].table.fields = dataArr[tableIndex].table.fields.filter(
  //   (item) => !ids.includes(item.id)
  // )
  deleteFunWrap(id, dataArr[tableIndex].tree)
  res.send({
    code: 200,
    data: id,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { tableId, id, dataItem } = req.body
  const tableIndex = dataArr.findIndex((item) => item.id === tableId)
  const tree = dataArr[tableIndex].tree
  editFunWrap(dataItem, tree)(tree, id)
  res.send({
    code: 200,
    data: dataItem,
    message: '编辑成功',
  })
}

//编辑全部
const dataEditAll = (req, res) => {
  const { tableId, dataItem, skin } = req.body
  const tableIndex = dataArr.findIndex((item) => item.id === tableId)
  dataArr[tableIndex].table.fields = [
    ...dataArr[tableIndex].table.fields.filter((item) => item.isSystem),
    ...dataItem,
  ]
  dataArr[tableIndex].table.skin = skin ? skin : {}

  res.send({
    code: 200,
    data: dataArr,
    message: '保存成功',
  })
}

module.exports = {
  processFieldsSearchAll: dataSearchAll,
  processFieldsSearch: dataSearch,
  processFieldsAdd: dataAdd,
  processFieldsDelete: dataDelete,
  processFieldsEdit: dataEdit,
  processFieldsEditAll: dataEditAll,
}
