@REM 接口/api/jenkins/run执行这个批处理 使用prettylist.txt以及其他文本生成prettylist.js，可以被js调用
echo const prettylist = > prettylist.js
type prettylist.txt >> prettylist.js
echo ; >> prettylist.js
echo module.exports = { prettylist } >> prettylist.js

