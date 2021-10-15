@REM 接口/api/jenkins/run执行这个批处理
echo %0 %1
set historyPath=%cd%
echo %historyPath%
cd /temp/m-node-edu/%1
call yarn -v
call yarn
@REM name会自动应用到pm2配置文件ecosystem.config.js的name字段
set tempName=%1
set name=%tempName:\=_%
set watch=false
call pm2 start ecosystem.config.js --env production
@REM 跳转到原路径
cd %historyPath%