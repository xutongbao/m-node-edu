const net = require('net')

const portUsed = (port) => {
  return new Promise((resolve, reject) => {
    let server = net.createServer().listen(port)
    server.on('listening', function () {
      server.close()
      resolve(port)
    })
    server.on('error', function (err) {
      if (err.code == 'EADDRINUSE') {
        resolve(err)
      }
    })
  })
}

const tryUsePort = async function (port, portAvailableCallback) {
  let res = await portUsed(port)
  if (res instanceof Error) {
    console.log(`端口：${port}被占用`)
    port++
    tryUsePort(port, portAvailableCallback)
  } else {
    portAvailableCallback(port)
    return port
  }
}

const choosePort = ({ port }) => {
  return new Promise((resolve, reject) => {
    tryUsePort(port, function (port) {
      // do something ...
      console.log(`端口：${port}可用`)
      // net.createServer().listen(port);
      resolve(port)
    })
  })
}

module.exports = {
  choosePort
}
