const spawn = require('cross-spawn')

spawn.sync('yarn -v', [], { stdio: 'inherit' })
//spawn.sync('run.bat origin/master', [], { stdio: 'inherit' })
spawn.sync('echo const prettylist = > prettylist.js', [], {
  stdio: 'inherit',
  shell: true
})
spawn.sync('pm2 prettylist >> prettylist.js', [], { stdio: 'inherit' })
spawn.sync('echo ; >> prettylist.js', [], {
  stdio: 'inherit',
  shell: true
})
spawn.sync('echo module.exports = { prettylist } >> prettylist.js', [], {
  stdio: 'inherit',
  shell: true
})
//result = Array.from(result).map(item => item.pid)
