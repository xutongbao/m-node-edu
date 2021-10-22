const axios = require('axios')
const { getJenkinsProjectName } = require('../../utils/tools')
const port = 81
const host = {
  'LAPTOP-4KDIA4A3': 'http://localhost',
  iZ6ilh61jzkvrhZ: 'http://39.97.238.175'
}[process.env.computername]
const baseURL = `${host}:${port}`
console.log('test', baseURL)

//项目名称
const name = 'node接口'

// 发邮件
const email = async ({ data }) => {
  const { currentPort } = data
  const emailData = {
    type: 'jenkins',
    title: '构建成功-测试环境',
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    jenkinsProjectName: getJenkinsProjectName({ cd: process.env.cd }),
    branch: process.env.branch,
    url: `${host}:${currentPort}`,
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
const handleAddRecord = async ({ data }) => {
  const { currentPort } = data
  const dataItem = {
    name,
    gitRepositorieName: process.env.gitRepositorieName,
    jenkinsProjectName: getJenkinsProjectName({ cd: process.env.cd }),
    branch: process.env.branch,
    projectType: 'node',
    url: `${host}:${currentPort}`,
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

//运行项目
const run = async () => {
  return await axios
    .post(`${baseURL}/api/jenkins/run`, {
      gitRepositorieName: process.env.gitRepositorieName,
      branch: process.env.branch
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
}

setTimeout(async () => {
  const data = await run()
  await email({ data })
  await handleAddRecord({ data })
}, 3000)
