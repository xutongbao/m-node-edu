@REM 开机启动pm2服务，80端口和81端口

CD /Jenkins/workspace/prod-m-node-edu-ice

set name=source_scripts_m_node_edu_dev2 
call pm2 start ecosystem.config.js --env development

CD /Jenkins/workspace/prod-m-node-edu

set name=source_scripts_m_node_edu_serve2 
call pm2 start ecosystem.config.js --env production 

echo success
pause
