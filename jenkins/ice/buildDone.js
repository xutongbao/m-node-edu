const axios = require('axios')
const port = 81
const host = {
  'LAPTOP-4KDIA4A3': 'http://localhost',
  iZ6ilh61jzkvrhZ: 'http://39.97.238.175'
}[process.env.computername]
const baseURL = `${host}:${port}`
console.log('ice', baseURL)

//项目名称
const name = 'node接口'

// 发邮件
const email = async () => {
  const emailData = {
    type: 'jenkins',
    title: '构建成功-基础api',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    branch: process.env.branch,
    url: `${host}:${port}`,
    remarks: '自动，接口地址'
  }
  await axios
    .post(`${baseURL}/api/log/email`, {
      ...emailData
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
    url: `${host}:${port}`,
    remarks: '自动，接口地址'
  }
  await axios
    .post(`${baseURL}/api/jenkins/add`, {
      dataItem
    })
    .then((res) => {
      console.log('Record added successfully!')
    })
    .catch((error) => {
      console.error(error)
    })
}

setTimeout(async () => {
  await email()
  await handleAddRecord()
}, 3000)
