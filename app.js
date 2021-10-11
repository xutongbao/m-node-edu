const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()
const { light } = require('./router/light')
const { air } = require('./router/air')
const { sale } = require('./router/sale')
const compression = require('compression')
const log4js = require('log4js')

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
//app.use(express.static('upload'))
app.use(express.static('/temp')) //, { index: '/air/origin/master/index.html'}
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
// const logResponseBody = (req, res, next) => {
//   const oldSend = res.send
//   res.send = function () {
//     const logger = log4js.getLogger('test')
//     logger.info(`req:${JSON.stringify(req.body)} res:${JSON.stringify(arguments)}`)
//     console.log(666)
//     oldSend.apply(res, arguments)
//   }
//   next()
// }

// app.use(logResponseBody)
// const oldSend = app.response.send
// app.response.send = function() {
//   console.log(6)
//   oldSend.apply(this, arguments)
// }

log4js.configure({
  appenders: {
    out: { type: 'console' },
    cheese: {
      type: 'file',
      filename: 'log/myLog.log',
      maxLogSize: 1024 * 1000 * 10 //10M
    }
  },
  categories: {
    default: { appenders: ['cheese', 'out'], level: log4js.levels.DEBUG }
  }
})
const logger = log4js.getLogger('log')
logger.debug('重启')

app.use(
  log4js.connectLogger(logger, {
    level: 'info',
    format: (req, res, format) => {
      return format(
        `:remote-addr - ${req.host} - ":method :url ${JSON.stringify(
          req.body
        )} HTTP/:http-version" :status :content-length ":referrer" ":user-agent"`
      )
    }
  })
)

app.get('/', function (req, res) {
  res.redirect('/air/origin/master/#/air/light/extra/home')
})

//知了好学的接口
light(app)

//销售系统
sale(app)

//无代码平台的接口
air(app)

//启动命令：set PORT=3000 && node app
const PORT = process.env.PORT || 81
app.listen(PORT, () => {
  console.log(PORT)
  console.log('hello,world1')
})
