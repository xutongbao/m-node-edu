@REM 接口/api/jenkins/run执行这个批处理 port.js保存pm2进程占用端口号的信息
echo ]; >> port.js
echo module.exports = { port } >> port.js
echo port.js done!
call pm2 restart source_scripts_m_node_edu_serve2
call pm2 restart source_scripts_m_node_edu_dev2