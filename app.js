const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const history = require('connect-history-api-fallback')
const app = express()
const { light } = require('./router/light')
const { air } = require('./router/air')

//app.use(history())
app.use(express.static('public'))
app.use(express.static('upload'))
app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// app.use((res, req, next) => {
//   setTimeout(() => {
//     next()
//   }, 1000)
// })

//知了好学的接口
light(app)

//无代码平台的接口
air(app)

//启动命令：set PORT=3000 && node app
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT)
})










