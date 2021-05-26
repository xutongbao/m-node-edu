const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const { bookMallData, bookMallDetailData, companyData, shopData } = require('./data')
const { voiceData } = require('./testData')
const { uploadImgMulter, uploadImg } = require('./upload.js')

const app = express()

let userList = [
  {
    id: 0,
    username: 'admin',
    password: '123456'
  },
  {
    id: 1,
    username: 'xu',
    password: '123'
  }
]

let myBooks = []

//app.use(history())
app.use(express.static('public'))
app.use(express.static(__dirname + '/upload'))
app.use(cors())
app.use(bodyParser.json())

// app.use((res, req, next) => {
//   setTimeout(() => {
//     next()
//   }, 1000)
// })

app.post('/api/login', (req, res) => {
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
})

app.get('/api/list', (req, res) => {
  res.send({
    code: 200,
    data: bookMallData,
    message: '列表'
  })
})

//增
app.post('/api/my_books', (req, res) => {
  let { book } = req.body
  let index = myBooks.findIndex(item => item.id === book.id)
  if (index >= 0) {
    myBooks[index].count += book.count
    myBooks[index].checked = true
  } else {
    book.checked = true
    myBooks.push(book)
  }
  
  res.send({
    code: 200,
    data: myBooks,
    message: '添加成功'
  })
})

//删
app.delete('/api/my_books', (req, res) => {
  let { ids } = req.body
  myBooks = myBooks.filter(item => !ids.includes(item.id))
  res.send({
    code: 200,
    data: myBooks,
    message: '删除成功'
  })
})

//查
app.get('/api/my_books', (req, res) => {
  res.send({
    code: 200,
    data: myBooks,
    message: '我的书包'
  })
})

//改
app.patch('/api/my_books', (req, res) => {
  let { id, operation, count, checked } = req.body
  let index = myBooks.findIndex(item => item.id === id)
  switch (operation) {
    case 'add':
      myBooks[index].count++
      myBooks[index].checked = true
      break;
    case 'sub':
      if (myBooks[index].count > 1) {
        myBooks[index].count--
      }
      break;
    case 'inputCount':
      myBooks[index].count = count
      break;
    case 'checked':
      myBooks[index].checked = checked
      break;
    case 'checkedAll':
      myBooks.forEach(item => item.checked = checked)
      break
    default:
      break;
  }
  res.send({
    code: 200,
    data: myBooks,
    message: '更新成功'
  })
})

//详情
app.get('/api/detail/:id', (req, res) => {
  let { id } = req.params
  let detail = {}
  outer:
  for (let i = 0; i < bookMallDetailData.length; i++) {
    for (let j = 0; j < bookMallDetailData[i].list.length; j++) {
      if (bookMallDetailData[i].list[j].id == id) {
        detail = bookMallDetailData[i].list[j]
        break outer
      }
    }
  }
  res.send({
    code: 200,
    data: detail,
    message: '详情'
  })
})

//测试
app.post('/api/test', (req, res) => {
  res.send(voiceData)
})

app.get('/api/company', (req, res) => {
  let { page, size, search = '' } = req.query
  //let newsSearchResult = news.filter(item => item.name.includes(search))
  let start = (page - 1) * size
  let end = start + size * 1
  res.send({
    code: 200,
    data: {
      list: companyData.slice(start, end),
      total: companyData.length,
      current: page - 0,
      pageSize: size - 0
    },
    message: '列表'
  })
})

app.get('/api/shop', (req, res) => {
  let { page, size, id = '' } = req.query
  let newsSearchResult = shopData.filter(item => item.id == id || id == '')
  let start = (page - 1) * size
  let end = start + size * 1
  res.send({
    code: 200,
    data: {
      list: newsSearchResult.slice(start, end),
      total: newsSearchResult.length,
      current: page - 0,
      pageSize: size - 0
    },
    message: '列表'
  })
})

//删除
app.post('/api/upload', uploadImgMulter.single('img'), uploadImg)

//启动命令：set PORT=3000 && node app
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})










