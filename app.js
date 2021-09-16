const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const history = require('connect-history-api-fallback');
const app = express();
const { light } = require('./router/light');
const { air } = require('./router/air');
const { sale } = require('./router/sale');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');

//通过代理解决跨域
app.use(
  '/zlhx',
  createProxyMiddleware({
    target: 'http://test-zhiliao.gongzuoshouji.cn',
    changeOrigin: true
  })
);

console.log(4);

app.use(compression({ filter: shouldCompress }));
//app.use(history())
//app.use(express.static('D:/zlhx-ui'))
//app.use(express.static('D:/tan-ui'))
//app.use(express.static('../zlhx-ui'))
//app.use(express.static('../blog/docs'))
//app.use(express.static('../tan-ui'))
//app.use(express.static('../air-github/docs'))
//app.use(express.static("public"));
app.use(express.static('upload'));
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

// app.use((res, req, next) => {
//   setTimeout(() => {
//     next()
//   }, 4000)
// })

//知了好学的接口
light(app);

//销售系统
sale(app);

//无代码平台的接口
air(app);

//启动命令：set PORT=3000 && node app
app.listen(process.env.PORT, () => {
  console.log(process.env.PORT);
});
