const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const { light } = require('./router/light')
const { air } = require('./router/air')
const { sale } = require('./router/sale')
const compression = require('compression')
const { logMiddleWare, getValuesByNodeEnv, getPort } = require('./utils/tools')
const { portTransfer } = require('./light/jenkins/jenkins')

//初始化
const init = async () => {
  const app = express()
  console.log(12)

  function shouldCompress(req, res) {
    if (req.headers['x-no-compression']) {
      // don't compress responses with this request header
      return false
    }

    // fallback to standard filter function
    return compression.filter(req, res)
  }
  //解决跨域问题
  var whitelist = ['http://example1.com', 'http://localhost:1888']
  var corsOptions = {
    origin:  function (origin, callback) {
      console.log(origin)
      if (typeof origin === 'undefined') {
        callback(null, true)
      } else if (whitelist.indexOf(origin) !== -1 || origin.includes('localhost') || origin.includes('39.97.238.175') || origin.includes('xutongbao.top') || origin.includes('http') ) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    maxAge: 5, //指定本次预检请求的有效期，单位为秒。
    credentials: true, //是否允许发送Cookie
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], //设置所允许的HTTP请求方法
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'], //设置服务器支持的所有头信息字段
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'] //设置获取其他自定义字段
  }
  app.use(cors(corsOptions))
  //开启gzip
  app.use(compression({ filter: shouldCompress }))

  await portTransfer({ app })

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
  //日志
  app.use(express.static('/tools/nginx-1.21.3/logs'))
  app.use(express.static('/temp'))
  //app.use(express.static('/temp/h5'))
  //app.use(express.static('/source/m-job/demo/m-app/build'))
  // parse application/x-www-form-urlencoded
  app.use(bodyParser.urlencoded({ extended: false }))
  // parse application/json
  app.use(bodyParser.json())

  // app.use((res, req, next) => {
  //   setTimeout(() => {
  //     next()
  //   }, 4000)
  // })

  //日志
  app.use(logMiddleWare())

  //重定向
  app.get('/', function (req, res) {
    res.redirect(redirectPath)
  })

  app.get('/abc', function (req, res) {
    res.redirect('https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0NDM0OTMxNQ==#wechat_redirect')
  })

  //知了好学的接口
  light(app)

  //销售系统
  sale(app)

  //无代码平台的接口
  air(app)
  //启动命令：set PORT=3000 && node app
  //yarn start命令用于 https://codesandbox.io 的node托管，本地使用yarn start直接启动会报错
  // let port = process.env.PORT
  // console.log(process.env.branch)
  // if (process.env.branch) {
  //   port = await getPort({ gitRepositorieName: 'm-node-edu', branch: process.env.branch, port })
  // }
  // console.log('port:', port)
  const port = await getPort()
  app.listen(port, () => {
    console.log(port)
    console.log('hello,world1234')
  })
}
init()



