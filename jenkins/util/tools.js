//获取Jenkins项目名称
const getJenkinsProjectName = ({ cd }) => {
  cd = cd.split('\\')
  cd = cd[cd.length - 1]

  console.log(cd)
  return cd
}

module.exports = {
  //获取Jenkins项目名称
  getJenkinsProjectName,
}
