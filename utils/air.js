const Mock = require('mockjs')

const customerInitValue = () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname',
    })
    arr.push({ id: i + 1 + '', ...temp, createTime: Date.now()  })
  }

  return arr
}

const clueInitValue = () => {
  let arr = []
  for (let i = 0; i < 102; i++) {
    const temp = Mock.mock({
      name: '@region',
    })
    arr.push({ id: i + 1 + '', ...temp, createTime: Date.now()  })
  }

  return arr
}

module.exports = {
  customerInitValue,
  clueInitValue,
}

