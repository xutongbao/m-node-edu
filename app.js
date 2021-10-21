const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()
const { light } = require('./router/light')
const { air } = require('./router/air')
const { sale } = require('./router/sale')
const compression = require('compression')
const { initLog, getValuesByNodeEnv } = require('./utils/tools')
const { getPort } = require('./light/jenkins/jenkins')
const { createProxyMiddleware } = require('http-proxy-middleware')

console.log(12)

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false
  }

  // fallback to standard filter function
  return compression.filter(req, res)
}
//开启gzip
app.use(compression({ filter: shouldCompress }))

//接口转发
app.use(
  '/source_scripts_serve1',
  createProxyMiddleware({
    target: 'http://localhost:84',
    changeOrigin: true,
    pathRewrite: {
      '^/source_scripts_serve1': '/',
    },
  })
)
//前端路由history模式
//app.use(history())
//app.use(express.static('D:/zlhx-ui'))
//app.use(express.static('D:/tan-ui'))
//app.use(express.static('../zlhx-ui'))
//app.use(express.static('../blog/docs'))
//app.use(express.static('../tan-ui'))
//app.use(express.static('../air-github/docs'))

//环境变量
const { staticUploadPath, staticWebPath, redirectPath } = getValuesByNodeEnv()

//上传文件
app.use(express.static(staticUploadPath))
//网页
app.use(express.static(staticWebPath))
//日志
app.use(express.static('log'))
//解决跨域问题
app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use((res, req, next) => {
//   setTimeout(() => {
//     next()
//   }, 4000)
// })

//初始化日志
initLog(app)

//重定向
app.get('/', function (req, res) {
  res.redirect(redirectPath)
})

//知了好学的接口
light(app)

//销售系统
sale(app)

//无代码平台的接口
air(app)

//初始化
const init = async () => {
  //启动命令：set PORT=3000 && node app
  //yarn start命令用于 https://codesandbox.io 的node托管，本地使用yarn start直接启动会报错
  let port = process.env.PORT
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
