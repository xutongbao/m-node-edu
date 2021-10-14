echo %0 %1
cd /temp/m-node-edu/%1
call yarn -v
call yarn
@REM name会自动应用到pm2配置文件ecosystem.config.js的name字段
set name=%1
call pm2 start ecosystem.config.js --env production