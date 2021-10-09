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

log4js.configure({
  appenders: {
    out: { type: 'console' },
    cheese: { type: 'file', filename: 'log/myLog.log', maxLogSize: 10240 }
  },
  categories: {
    default: { appenders: ['cheese'], level: log4js.levels.DEBUG }
  }
})
const logger = log4js.getLogger('log')
logger.debug('重启')

app.use(
  log4js.connectLogger(logger, {
    level: log4js.levels.DEBUG,
    format: (req, res, format) =>
      format(`:remote-addr :method :url ${JSON.stringify(req.body)}`)
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
