const fs = require('fs')

const removeFileDir = (path)=>{
  var files = fs.readdirSync(path);
      for (let item of files) {
          var stats = fs.statSync(`${path}/${item}`);
          if (stats.isDirectory()) {
              removeFileDir(`${path}/${item}`)
          } else {
              fs.unlinkSync(`${path}/${item}`)
          }
      }
      fs.rmdirSync(path)
}
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
    itemArr.push(word)
    return word
  })
  itemArr.forEach((item, index) => {
    let title = ''
    item.replace(/<title(([\s\S])*?)<\/title>/g, (word) => {
      title = word.slice(7, word.length - 8)
      console.log(title)
      itemArr.push(word)
      return word
    })
    //fs.rmdirSync(`${__dirname}/md`);
    removeFileDir(`${__dirname}/md`)
    fs.writeFile(
      __dirname + `/md/${index}${title}.md`,
      `# ${title}`,
      function (err) {
        if (err) {
          return console.log(err)
        }
        console.log('The file was saved!')
      }
    )
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
