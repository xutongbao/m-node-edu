let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456',
    sysAdmin: 1,
    info: {
      companys: [
        {
          id: 0,
          companyName: '北京企友科技有限责任公司',
          role: 'admin'
        }
      ]
    }
  },
  {
    id: 1,
    username: 'xutongbao',
    password: '123456',
    sysAdmin: 0,
    info: {}
  },
  {
    id: 2,
    username: 'xu',
    password: '123456',
    sysAdmin: 0,
    info: {}
  },
  {
    id: 3,
    username: '13642061747',
    password: '123456',
    sysAdmin: 0,
    info: {}
  }
]

//登录
const login = (req, res) => {
  let { username, password } = req.body
  console.log(666, req.body)
  let user = userList.find((item) => item.username === username)
  if (user) {
    if (user.password === password) {
      res.send({
        code: 200,
        data: {
          id: user.id,
          username,
          access_token:
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZGVudGl0eSI6MSwidXNlcm5hbWUiOiJhZG1pbiJ9.e1rgnFKrbuyAfOY4H19sTzMScmSKH9YezUMUuZL8Nro',
          sysAdmin: user.sysAdmin,
          info: user.info
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
      message: '用户名不存在-本地111'
    })
  }
}

//登录
const loginEdu = (req, res) => {
  let { userName, passWord } = req.body
  let user = userList.find((item) => item.username === userName)
  if (user) {
    if (user.password === passWord) {
      res.send({
        state: 1,
        data: {
          userName,
          token: user.id
        },
        message: '登录成功'
      })
    } else {
      res.send({
        state: 0,
        message: '密码错误'
      })
    }
  } else {
    res.send({
      state: 0,
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

//获取验证吗
const getCode = (req, res) => {
  const { phone } = req.body
  res.send({
    state: 1,
    data: {
      phone
    },
    message: '成功'
  })
}

//注册
const register = (req, res) => {
  const { phone, code, password } = req.body
  const user = userList.find((item) => item.username === phone)
  if (user) {
    res.send({
      state: 0,
      data: {
        phone
      },
      message: '手机号已经注册了'
    })
  } else {
    userList.push({
      id: Date.now(),
      username: phone,
      password,
      sysAdmin: 0,
      info: {}
    })
    res.send({
      state: 1,
      data: {
        phone
      },
      message: '成功'
    })
  }
}

//根据token获取用户信息
const getUserInfo = (req, res) => {
  res.send({
    state: 1,
    data: userList,
    message: '获取用户信息成功'
  })
}

//获取用户列表
const getUserList = (req, res) => {
  const data = userList.map((item) => {
    return {
      id: item.id,
      name: item.username,
    }
  })
  res.send({
    state: 1,
    data,
    message: '成功'
  })
}

//注册企业
const registerCompany = (req, res) => {
  const { loginUserId, companyName } = req.body
  const resultIndex = userList.findIndex((item) => item.id == loginUserId)
  const company = {
    id: Date.now(),
    companyName,
    role: 'admin'
  }
  if (resultIndex >= 0) {
    if (
      userList[resultIndex].info &&
      Array.isArray(userList[resultIndex].info.companys)
    ) {
      userList[resultIndex].info.companys.push(company)
    } else if (userList[resultIndex].info) {
      userList[resultIndex].info.companys = [company]
    }
    res.send({
      state: 1,
      data: {
        company
      },
      message: '成功'
    })
  } else {
    res.send({
      state: 0,
      data: {
        loginUserId
      },
      message: '用户不存在'
    })
  }
}

module.exports = {
  login,
  loginEdu,
  logout,
  getCode,
  getUserInfo,
  getUserList,
  register,
  registerCompany
}
