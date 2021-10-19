@REM 检查端口是否被其他程序占用，例如nginx程序
echo %0 %1
netstat -ano | findstr 0.0.0.0:%1 > portUsed.txt