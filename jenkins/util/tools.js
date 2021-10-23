const os = require('os')
const { hostList } = require('../../utils/config')

//获取Jenkins项目名称
const getJenkinsProjectName = ({ cd }) => {
  cd = cd.split('\\')
  cd = cd[cd.length - 1]

  console.log(cd)
  return cd
}

//根据主机名获取baseURL
const getBaseURL = () => {
  const port = 81
  const hostname = os.hostname()
  const host = hostList[hostname]
  const baseURL = `${host}:${port}`
  return {
    host,
    port,
    baseURL,
  }
}

module.exports = {
  //获取Jenkins项目名称
  getJenkinsProjectName,
  //根据主机名获取baseURL
  getBaseURL
}
