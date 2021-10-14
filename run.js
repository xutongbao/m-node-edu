const spawn = require('cross-spawn');

spawn.sync('yarn -v', [], { stdio: 'inherit' })
spawn.sync('run.bat origin/master', [], { stdio: 'inherit' })
