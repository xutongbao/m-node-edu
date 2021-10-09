@REM 设置git仓库名称
set gitRepositorieName=m-node-edu

@REM 设置环境变量并执行js脚本发送邮件通知、添加构建记录
set IP=39.97.238.175
set PORT=81
set branch=origin/master
call node buildDone
echo http://%IP%:%PORT%
pause
