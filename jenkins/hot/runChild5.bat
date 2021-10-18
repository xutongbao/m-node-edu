@REM 接口/api/jenkins/run执行这个批处理 port.js保存pm2进程占用端口号的信息
echo ]; >> %paht%port.js
echo module.exports = { port } >> %paht%port.js
echo %paht%port.js done!