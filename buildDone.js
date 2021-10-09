const axios = require('axios')

const baseURL = `http://${process.env.IP}:${process.env.PORT}`
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
      console.log(0)
    })
    .catch((error) => {
      console.error(error)
    })
  console.log(1)
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
setTimeout(async () => {
  await email()
  console.log(2)
  await handleAddRecord()
}, 3000)

