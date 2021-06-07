let dataArr = [
  {
    categoryName: '留学',
    belongCategory: '0',
    status: true,
    id: 1622771045562,
    children: [
      {
        categoryName: '雅思',
        belongCategory: 1622771045562,
        status: true,
        id: 1622771052842,
      },
    ],
  },
]

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
const deleteEmptyChildrenFunWrap = () => {
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

  return deleteEmptyChildrenFun(dataArr)
}

//编辑函数，递归遍历所有children，找到他的对应的id并编辑
const editFunWrap = (dataItem) => {
  const editFun = (arr, id) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        editFun(arr[i].children, id)
      }
      if (arr[i].id === id) {
        //编辑的不是所属分类
        if (arr[i].belongCategory === dataItem.belongCategory) {
          arr[i] = { id, ...dataItem, updateTime: Date.now() }
        } else {
          //删除当前的
          arr.splice(i, 1)
          if (arr.length === 0) {
            deleteEmptyChildrenFunWrap()
          }
          //重新添加一个新的
          addFunWrap(dataItem)(dataArr, dataItem.belongCategory)
        }
      }
    }
  }
  return editFun
}

//删除函数，递归遍历所有children，找到他的对应的id并编辑
const deleteFunWrap = (id) => {
  const deleteFun = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].children) {
        deleteFun(arr[i].children)
      }
      if (arr[i].id === id) {
        //删除当前的
        arr.splice(i, 1)
        if (arr.length === 0) {
          deleteEmptyChildrenFunWrap()
        }
      }
    }
  }
  deleteFun(dataArr)
}

//搜索
const dataSearch = (req, res) => {
  res.send({
    code: 200,
    data: dataArr,
    message: '搜索成功',
  })
}

//添加
const dataAdd = (req, res) => {
  const { dataItem } = req.body
  dataItem.id = Date.now()

  addFunWrap(dataItem)(dataArr, dataItem.belongCategory)

  res.send({
    code: 200,
    data: dataArr,
    message: '添加成功',
  })
}

//删除
const dataDelete = (req, res) => {
  let { ids } = req.body
  console.log(ids)
  //dataArr = dataArr.filter((item) => !ids.includes(item.id))
  deleteFunWrap(ids[0])
  res.send({
    code: 200,
    data: ids,
    message: '删除成功',
  })
}

//编辑
const dataEdit = (req, res) => {
  let { id, dataItem } = req.body

  editFunWrap(dataItem)(dataArr, id)
  res.send({
    code: 200,
    data: dataItem,
    message: '编辑成功',
  })
}

module.exports = {
  categorySearch: dataSearch,
  categoryAdd: dataAdd,
  categoryDelete: dataDelete,
  categoryEdit: dataEdit,
}
