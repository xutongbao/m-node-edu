const simpleGit = require('simple-git')

const getBranch = async () => {
  const git = simpleGit()
  const status = await git.status()
  console.log(status)
  return status.tracking
}

const init = async () => {
  const branch = await getBranch()
  console.log(branch)
}

init()

