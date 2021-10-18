@REM 接口/api/jenkins/run执行这个批处理 使用prettylist.txt以及其他文本生成prettylist.js，可以被js调用
echo const prettylist = > %paht%prettylist.js
type prettylist.txt >> %paht%prettylist.js
echo ; >> %paht%prettylist.js
echo module.exports = { prettylist } >> %paht%prettylist.js
echo %paht%prettylist.js done!

