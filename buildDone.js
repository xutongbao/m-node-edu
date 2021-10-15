const axios = require('axios')

const baseURL = {
  'LAPTOP-4KDIA4A3': 'http://localhost:81',
  'iZ6ilh61jzkvrhZ': 'http://39.97.238.175:81'
}[process.env.computername]
console.log(baseURL)

//项目名称
const name = 'node接口'

// 发邮件
const email = async () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.branch,
    url: `${baseURL}`,
    remarks: '自动，接口地址'
  }
  await axios
    .post(`${baseURL}/api/log/email`, {
      ...emailData,
    })
    .then((res) => {
      console.log('E-Mail sent successfully!')
    })
    .catch((error) => {
      console.error(error)
    })
}

// 添加构建记录
const handleAddRecord = async () => {
  const dataItem = {
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.branch,
    url: `${baseURL}`,
    remarks: '自动，接口地址'
  }
  await axios
    .post(`${baseURL}/api/jenkins/add`, {
      dataItem,
    })
    .then((res) => {
      console.log('Record added successfully!')
    })
    .catch((error) => {
      console.error(error)
    })
}

//运行项目
const run = async () => {
  await axios
    .post(`${baseURL}/api/jenkins/run`, {
      branch: process.env.branch,
    })
    .then((res) => {
      console.log('Processing. Please wait!')
    })
    .catch((error) => {
      console.error(error)
    })
}

setTimeout(async () => {
  await run()
  await email()
  await handleAddRecord()
}, 3000)

