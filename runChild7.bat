@REM 开机启动pm2服务，80端口和81端口
CD /Jenkins/workspace/prod-m-node-edu-ice
call yarn dev2
CD /Jenkins/workspace/prod-m-node-edu
call yarn serve2
echo success
pause
