const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()
const { light } = require('./router/light')
const { air } = require('./router/air')
const { sale } = require('./router/sale')
const compression = require('compression')
const { initLog } = require('./utils/tools')
const { getPort } = require('./light/jenkins/jenkins')

console.log(12)

//开启gzip
app.use(compression({ filter: shouldCompress }))
//app.use(history())
//app.use(express.static('D:/zlhx-ui'))
//app.use(express.static('D:/tan-ui'))
//app.use(express.static('../zlhx-ui'))
//app.use(express.static('../blog/docs'))
//app.use(express.static('../tan-ui'))
//app.use(express.static('../air-github/docs'))
//app.use(express.static('public'))
app.use(express.static('upload'))
if (process.env.NODE_ENV === 'codesandbox') {
  app.use(express.static('codesandbox'))
} else {
  app.use(express.static('/temp'))
}

app.use(express.static('log'))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}

// app.use((res, req, next) => {
//   setTimeout(() => {
//     next()
//   }, 4000)
// })

//初始化日志
initLog(app)

app.get('/', function (req, res) {
  res.redirect('/air/origin/master/#/air/light/extra/home')
})

//知了好学的接口
light(app)

//销售系统
sale(app)

//无代码平台的接口
air(app)

const init = async () => {
  //启动命令：set PORT=3000 && node app
  //yarn start命令用于https://codesandbox.io网站的node托管，本地使用yarn start直接启动会报错
  let port = process.env.PORT
  if (process.env.NODE_ENV !== 'codesandbox') {
    port = process.env.PORT || 81
  }
  console.log(process.env.branch)
  if (process.env.branch) {
    port = await getPort({ branch: process.env.branch, port })
  }
  console.log('port:', port)
  app.listen(port, () => {
    console.log(port)
    console.log('hello,world123')
  })
}
init()
