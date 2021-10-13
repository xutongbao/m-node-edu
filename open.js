const git = require('simple-git/promise')

const GIT_REPOSITORY_ROOT = 'D:/source/edu-node-github'
//这个路径是你从git上拉下来的代码存放的路径，自己定义就好
simpleGit = git(GIT_REPOSITORY_ROOT );
//以下的所有命令都是基于这个repository的路径进行操作了

const init = async () => {
  const status = await simpleGit.status();
  console.log(status)
  console.log(status.current)
}
init()
