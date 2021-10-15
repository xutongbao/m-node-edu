@REM 设置git仓库名称
set gitRepositorieName=m-node-edu
set branch=origin/master

@REM 复制编译好的的代码到新目录
xcopy \Jenkins\workspace\%gitRepositorieName% \temp\%gitRepositorieName%\%branch:/=\%\ /Y /E /exclude:exclude.txt

@REM 设置环境变量并执行js脚本发送邮件通知、添加构建记录
set computername=%computername%
call node buildDone
echo success
pause
