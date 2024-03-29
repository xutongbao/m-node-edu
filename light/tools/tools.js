const fs = require('fs')
const { getTransporter } = require('../../utils/tools')
const nodemailer = require('nodemailer')

let timer
let startValue

//监控
const toolsOpenMonitor = async (req, res) => {
  const monitorFilePath = '/temp/log/monitor.json'
  clearInterval(timer)
  fs.readFile(monitorFilePath, 'utf-8', function (err, data) {
    if (err) {
      console.log(err)
    } else {
      let dataObj = eval('(' + data + ')')
      startValue = dataObj.count
    }
  })
  let isAlert = false
  timer = setInterval(() => {
    fs.readFile(monitorFilePath, 'utf-8', async function (err, data) {
      if (err) {
        console.log(err)
      } else {
        try {
          let dataObj = eval('(' + data + ')')
          dataObj.count = dataObj.count - 1
          console.log('81', 'startValue:', startValue, 'currentValue:', dataObj.count)
          if (startValue - dataObj.count > 5 && isAlert === false) {
            console.log('报警')
            isAlert = true
            const transporter = getTransporter()
            let result = await transporter.sendMail({
              // from: '<13642061747@sina.cn>',
              // to: '1183391880@qq.com',
              from: '<chat@xutongbao.top>',
              to: '1183391880@qq.com',
              subject: 'node服务警报-【85】端口node服务停止服务',
              html: 'node服务警报-【85】端口node服务停止服务'
            })
            console.log('Message sent: %s', result.messageId)
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result))          
          }
          fs.writeFile(
            monitorFilePath,
            JSON.stringify(dataObj, null, 2),
            { encoding: 'utf8' },
            (err) => {
              if (err) {
                console.log(err)
              }
            }
          )
        } catch (error) {
          console.log('监控报错', error)
        }
      }
    })
  }, 60000)

  console.log('开启监控-81')

  res.send({
    code: 200,
    data: {},
    message: '开启监控-81'
  })
}

//监控关闭
const toolsCloseMonitor = async (req, res) => {
  clearInterval(timer)
  console.log('关闭监控-81')

  res.send({
    code: 200,
    data: {},
    message: '关闭监控-81'
  })
}


module.exports = {
  toolsOpenMonitor,
  toolsCloseMonitor
}
