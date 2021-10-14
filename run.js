const spawn = require('cross-spawn');

// // Spawn NPM asynchronously
// const child = spawn('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });

// // Spawn NPM synchronously
// const result = spawn.sync('npm', ['list', '-g', '-depth', '0'], { stdio: 'inherit' });


spawn.sync('run.bat', [], { stdio: 'inherit' })
//spawn.sync('dir', [], { stdio: 'inherit' })

// spawn.sync('yarn', ['-v'], { stdio: 'inherit' })
// spawn.sync('yarn', [], { stdio: 'inherit' })
// spawn.sync('pm2 start ecosystem.config.js --env production && pm2 logs', [], { stdio: 'inherit' })