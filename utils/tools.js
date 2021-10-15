const Mock = require('mockjs')
const nodemailer = require('nodemailer')
const log4js = require('log4js')
const net = require('net')
const simpleGit = require('simple-git')

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

let transporter
const emailInit = async () => {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount()

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
  const { title, name, gitRepositorieName, branch, url, remarks } = dataObj
  // send mail with defined transport object
  let info = await transporter.sendMail({
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
        <span>分支名称：</span>
        <span>${branch}</span>
      </div>                  
      <div>
        <span>测试链接：</span>
        <a href="${url}">${url}</a>
      </div> 
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

  console.log('Message sent: %s', info.messageId)
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

//日志初始化
const initLog = (app) => {
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
      resolve(port)
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

//获取git项目分支名称
const getBranch = async ({ path = '' } = {}) => {
  const git = simpleGit('/temp/m-node-edu/origin/feature/login/')
  const status = await git.status()
  console.log(status)
  return status.tracking
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
  //获取git项目分支名称
  getBranch
}
