const Mock = require('mockjs')
const nodemailer = require('nodemailer')
const log4js = require('log4js')
const net = require('net')
const spawn = require('cross-spawn')
const fs = require('fs')
const { fromJS } = require('immutable')
const axios = require('axios')
const { getBaseURL } = require('../jenkins/util/tools')
const os = require('os')

const mockShop = () => {
  return Mock.mock({
    beloneCompany: '@cname 瑞尚创美',
    checkStatus: () => Mock.Random.integer(0, 1),
    supplementCheckStatus: () => Mock.Random.integer(0, 1),
    supplementBindStatus: () => Mock.Random.integer(0, 1),
    shopMoney: () => Mock.Random.integer(100, 1000),
    addTime: Date.now(),
    updateTime: undefined,
    releaseStatus: () => Mock.Random.integer(0, 1),
    isOpenClueSms: false,
    commentCount: () => Mock.Random.integer(0, 5),
    guideCount: () => Mock.Random.integer(0, 5)
  })
}

const shopInitValue = () => {
  const addInitValues = {
    logo: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg'
    },
    tp_auth_img: {
      name: '1622108601020-证书.pdf',
      url: 'http://localhost:81/1622108601020-证书.pdf'
    },
    location: ['河北省', '唐山市', '路北区'],
    work_day: {
      start: '周一',
      end: '周五'
    },
    course_sort: 0,
    sale_name: '张三',
    sale_attribution: '0',
    owner_mail: '1183391880@qq.com',
    owner_phone: '13642061747',
    owner_name: '徐同保',
    work_time: '07:00-22:00',
    position: '116.314007,39.948574',
    category: [
      {
        id: 0,
        value: ['职业教育', 'IT/互联网', '电商运营']
      },
      {
        id: 1,
        value: ['职业教育', 'IT/互联网', '产品经理']
      }
    ],
    detail_address: '1',
    isOpenClueSms: false,
    commentCount: () => Mock.Random.integer(0, 5),
    guideCount: () => Mock.Random.integer(0, 5),
    IM: {}
  }

  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname'
    })
    arr.push({ ...addInitValues, ...temp, ...mockShop(), id: i + 1 + '' })
  }

  return arr
}

const templateInitValue = () => {
  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname'
    })
    arr.push({ ...temp, id: i + 1 })
  }

  return arr
}

const mockCompany = () => {
  return Mock.mock({
    schoolName: '@cname 北京京佳教育有限公司',
    phone: '电话：4008281999 【机构】短信：13716171502 【机构】',
    checkStatus: () => Mock.Random.integer(0, 1),
    checkTime: Date.now(),
    operators: '@cname',
    releaseStatus: () => Mock.Random.integer(0, 1),
    shopCount: () => Mock.Random.integer(0, 5),
    addTime: Date.now(),
    updateTime: undefined,
    companyId: Date.now()
  })
}

const companyInitValue = () => {
  const addInitValues = {
    industry: '0',
    platformPhone: '0101234567',
    smsPhone: '13642061747',
    logo: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg'
    },
    brand: '中公',
    relatedBrand: '1',
    edu_type: '1',
    org_type: '1',
    credentialNo: '666',
    enterpriseName: '中公教育',
    org_license_time: '2012年01月01日-2032年05月02日',
    org_license: {
      name: '1622108199953-小米书城.jpg',
      url: 'http://localhost:81/1622108199953-小米书城.jpg'
    },
    companyId: '118198167621386'
  }

  let arr = []
  for (let i = 0; i < 100; i++) {
    const temp = Mock.mock({
      name: '@cname'
    })
    arr.push({ ...addInitValues, ...temp, ...mockCompany(), id: i + 1 + '' })
  }

  return arr
}

let transporter = {}
const emailInit = async () => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  //let testAccount = await nodemailer.createTestAccount()

  // create reusable transporter object using the default SMTP transport
  transporter = nodemailer.createTransport({
    host: 'smtp.sina.cn',
    // service: 'qq',
    // port: 465,
    //secure: false, // true for 465, false for other ports
    secureConnection: true, // 使用了 SSL
    auth: {
      user: '13642061747@sina.cn', // generated ethereal user
      pass: 'xutongbao123456' // generated ethereal password
    }
  })
}

emailInit()

//获取发邮件的对象
const getTransporter = () => {
  return transporter
}

//发送邮件
// async..await is not allowed in global scope, must use a wrapper
const sendEmail = async (dataObj) => {
  const { path, username, errorTitle, detail, browser } = dataObj
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '<13642061747@sina.cn>', // sender address
    to: '1183391880@qq.com', //'1183391880@qq.com', // list of receivers
    subject: '知了好学错误报告', // Subject line
    html: `
    <div>
      <div>
        <span>路径：</span>
        <a href="http://zlhx.gongzuoshouji.cn/#${path}">${path}</a>
      </div> 
      <div>
        <span>用户名：</span>
        <span>${username}</span>
      </div>
      <div>
        <span>错误标题：</span>
        <span>${errorTitle}</span>
      </div>
      <div>
        <span>错误详情：</span>
        <div style="white-space: pre-wrap">${detail}</div>
      </div>
      <div>
        <span>发生时间：</span>
        <span>${Date()}</span>
      </div>
      <div>
        <span>浏览器型号：</span>
        <span>${browser}</span>
      </div>
    </div>` // html body
  })

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//jenkins构建完成邮件通知
const jenkinsSendEmail = async (dataObj) => {
  const {
    title,
    name,
    gitRepositorieName,
    jenkinsProjectName,
    branch,
    url,
    hashUrl,
    remarks
  } = dataObj
  // send mail with defined transport object
  let result = await transporter.sendMail({
    from: '<13642061747@sina.cn>', // sender address
    to: '1183391880@qq.com', //'1183391880@qq.com', // list of receivers
    subject: title, // Subject line
    html: `
    <div>
      <div>
        <span>项目名称：</span>
        <span>${name}</span>
      </div> 
      <div>
        <span>Git仓库名称：</span>
        <span>${gitRepositorieName}</span>
      </div> 
      <div>
        <span>Jenkins项目名称：</span>
        <span>${jenkinsProjectName}</span>
      </div> 
      <div>
        <span>分支名称：</span>
        <span>${branch}</span>
      </div>                  
      <div>
        <span>测试链接：</span>
        <a href="${url}">${url}</a>
      </div>
      ${
        hashUrl
          ? `
      <div>
        <span>哈希测试链接：</span>
        <a href="${hashUrl}">${hashUrl}</a>
      </div>`
          : ``
      } 
      <div>
        <span>备注：</span>
        <span>${remarks}</span>
      </div>        
      <div>
        <span>时间：</span>
        <span>${Date()}</span>
      </div>
    </div>` // html body
  })

  console.log('Message sent: %s', result.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(result))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//日志初始化
const initLog = (app) => {
  const { logFilePath } = getValuesByNodeEnv()
  log4js.configure({
    appenders: {
      out: { type: 'console' },
      cheese: {
        type: 'file',
        filename: logFilePath,
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
}

//日志对象
const logger = (name) => {
  return log4js.getLogger(name)
}

//测试端口是否可用
const portUsed = (port) => {
  return new Promise((resolve, reject) => {
    let server = net.createServer().listen(port)
    server.on('listening', function () {
      server.close()
      spawn.sync(`./checkPort.bat ${port}`, [], { stdio: 'inherit' })
      let portUsedStr = fs.readFileSync('./portUsed.txt').toString()
      console.log(portUsedStr.length)
      if (portUsedStr.length === 0) {
        if ((port - 0) === 87) {
          resolve(new Error())
        } else {
          resolve(port)
        }
      } else {
        portUsedStr = portUsedStr.trim()
        portUsedStr = portUsedStr.replace(/\s+/g, ' ')
        portUsedStr = portUsedStr.split(' ')
        if (portUsedStr[1] === `0.0.0.0:${port}`) {
          resolve(new Error())
        } else {
          resolve(port)
        }
      }
    })
    server.on('error', function (err) {
      if (err.code == 'EADDRINUSE') {
        resolve(err)
      }
    })
  })
}

//尝试新端口
const tryUsePort = async function (port, portAvailableCallback) {
  let res = await portUsed(port)
  if (res instanceof Error) {
    console.log(`port ${port} already used`)
    port++
    tryUsePort(port, portAvailableCallback)
  } else {
    portAvailableCallback(port)
    return port
  }
}

//选择可用端口
const choosePort = ({ port }) => {
  return new Promise((resolve, reject) => {
    tryUsePort(port, function (port) {
      // do something ...
      console.log(`port ${port} can use`)
      // net.createServer().listen(port);
      resolve(port)
    })
  })
}

//睡眠函数
const sleep = async (count) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, count)
  })
}

//根据环境变量获取一些值
const getValuesByNodeEnv = () => {
  //环境变量
  const NODE_ENV = process.env.NODE_ENV || 'development'
  let staticUploadPath = '/temp/uploadForDev'
  let staticWebPath = '/temp'
  let redirectPath = '/'
  const hostname = os.hostname()
  let dbFilePath = '/temp/dbFile/my_dev.db'
  if (hostname === "macbookdeMacBook-Pro-2.local") {
    dbFilePath = '/Users/macbook/temp/dbFile/my_dev.db'
  }
  let logFilePath = 'log/myLog.log'

  if (NODE_ENV === 'development') {
    staticUploadPath = '/temp/uploadForDev'
    staticWebPath = '/temp'
    redirectPath = '/test/air/origin/master/#/air/light/extra/home'
    dbFilePath = '/temp/dbFile/my_dev.db'
    if (hostname === "macbookdeMacBook-Pro-2.local") {
      dbFilePath = '/Users/macbook/temp/dbFile/my_dev.db'
    }  } else if (NODE_ENV === 'production') {
    staticUploadPath = '/temp/uploadForProd'
    staticWebPath = '/temp'
    redirectPath = '/air/#/air/light/extra/home'
    //dbFilePath = '/temp/dbFile/my_prod.db'
    dbFilePath = '/temp/dbFile/my_dev.db'
    if (hostname === "macbookdeMacBook-Pro-2.local") {
      dbFilePath = '/Users/macbook/temp/dbFile/my_dev.db'
    }
  } else if (NODE_ENV === 'codesandbox') {
    staticUploadPath = 'uploadForCodesandbox'
    staticWebPath = 'codesandbox'
    redirectPath = '/'
    dbFilePath = './codesandbox.db'
    logFilePath = 'log/myLog.log'
  }

  return {
    staticUploadPath,
    staticWebPath,
    redirectPath,
    dbFilePath,
    logFilePath
  }
}

//获取hash短码
const getHash = ({ list }) => {
  let tempStr = Math.random().toString(36).substr(2, 5)
  while (list.find((item) => item.hash === tempStr)) {
    tempStr = Math.random().toString(36).substr(2, 5)
  }
  return tempStr
}

//深拷贝
const deepClone = (obj) => {
  return fromJS(obj).toJS()
}

//获取可用端口号
const getPort = async () => {
  const NODE_ENV = process.env.NODE_ENV || 'development'
  let port = process.env.PORT
  console.log(process.env.branch)
  if (process.env.branch) {
    const data = await axios
      .post(`${getBaseURL().baseURL}/api/jenkins/getPort`, {
        gitRepositorieName: process.env.gitRepositorieName,
        branch: process.env.branch,
        port
      })
      .then((res) => {
        if (res.data.state === 1) {
          console.log('Start successful!')
          return res.data.data
        }
      })
      .catch((error) => {
        console.error(error)
      })

    console.log(data)
    port = data.port
  } else {
    port = await choosePort({ port })
  }
  
  if (NODE_ENV === 'codesandbox') {
    console.log('post:codesandbox')
    return port
  } else {
    console.log('port:', port)
    return port
  }
  
}

module.exports = {
  mockShop,
  shopInitValue,
  templateInitValue,
  mockCompany,
  companyInitValue,
  //发送邮件
  sendEmail,
  //jenkins构建完成邮件通知
  jenkinsSendEmail,
  //日志初始化
  initLog,
  //日志对象
  logger,
  //选择可用端口
  choosePort,
  //睡眠函数
  sleep,
  //根据环境变量获取一些值
  getValuesByNodeEnv,
  //获取hash短码
  getHash,
  //深拷贝
  deepClone,
  //获取可用端口号
  getPort,
  //获取发邮件的对象
  getTransporter
}
