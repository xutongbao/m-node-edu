@REM 接口/api/jenkins/run执行这个批处理 prettylist.txt保存pm2进程信息
set path=./jenkins/hot/
pm2 prettylist > %paht%prettylist.txt