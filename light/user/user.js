let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456'
  },
  {
    id: 1,
    username: 'admin',
    password: '123'
  }
]

//登录
const login = (req, res) => {
  let { username, password } = req.body
  let user = userList.find(item => item.username === username)
  if (user) {
    if (user.password === password) {
      res.send({
        code: 200,
        data: {
          username,
          token: user.id
        },
        message: '登录成功'
      })
    } else {
      res.send({
        code: 400,
        message: '密码错误'
      })
    }
  } else {
    res.send({
      code: 400,
      message: '用户名不存在'
    })
  }
}

//登录
const loginEdu = (req, res) => {
  let { userName, passWord } = req.body
  let user = userList.find(item => item.username === userName)
  if (user) {
    if (user.password === passWord) {
      res.send({
        code: 200,
        data: {
          userName,
          token: user.id
        },
        message: '登录成功'
      })
    } else {
      res.send({
        code: 400,
        message: '密码错误'
      })
    }
  } else {
    res.send({
      code: 400,
      message: '用户名不存在'
    })
  }
}

//退出
const logout = (req, res) => {
  res.send({
    code: 200,
    message: '退出成功'
  })
}

//根据token获取用户信息
const getUserInfo = (req, res) => {
  let token = req.headers['token']
  const user = userList.find(item => item.id == token)
  res.send({
    code: 200,
    data: user,
    message: '获取用户信息成功'
  })
}

module.exports = { login, loginEdu, logout, getUserInfo }




