const fs = require('fs')

//搜索
const dataSearch = (req, res) => {
  let htmlStr = fs.readFileSync(__dirname + '/data.xml', 'utf8')
  htmlStr = htmlStr
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/\n/g, '')
  let itemArr = []
  htmlStr.replace(/<item(([\s\S])*?)<\/item>/g, (word) => {
    console.log(word)
    itemArr.push(word)
    return word
  })
  res.send({
    state: 1,
    data: {
      htmlStr,
      itemArr,
    },
    message: '搜索成功',
  })
}

module.exports = {
  csdnSearch: dataSearch,
}
