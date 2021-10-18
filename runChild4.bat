@REM 接口/api/jenkins/run执行这个批处理 port.txt保存pm2进程占用端口号的信息
echo %0 %1
echo %1 >> port.txt
netstat -ano | findstr %1 >> port.txt