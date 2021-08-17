
let dataArr = []

const setItem = (req, res) => {
  const { key, value } = req.body
  const index = dataArr.findIndex(item => item.key === key)
  if (index >= 0) {
    dataArr[index] = {
      key,
      value,
    }
  } else {
    dataArr.push({
      key,
      value
    })
  }
  res.send({
    state: 1,
    data: key,
    message: '成功',
  })
}

const getItem = (req, res) => {
  const { key } = req.body
  const index = dataArr.findIndex(item => item.key === key)
  console.log(index)
  if (index >= 0) {
    res.send({
      state: 1,
      data: dataArr[index],
      message: '成功',
    })
  } else {
    res.send({
      state: 1,
      data: undefined,
      message: '成功',
    })
  }
}

module.exports = {
  setItem: setItem,
  getItem: getItem,
}
