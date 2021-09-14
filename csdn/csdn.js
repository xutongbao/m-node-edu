const fs = require('fs')
const html2md = require('html-to-md')
const { NodeHtmlMarkdown } = require('node-html-markdown')

//删除文件夹下的所有文件和子文件夹，不删除该文件夹
const removeFileDir = (path) => {
  let files = fs.readdirSync(path)
  for (let item of files) {
    let stats = fs.statSync(`${path}/${item}`)
    if (stats.isDirectory()) {
      removeFileDir(`${path}/${item}`)
    } else {
      fs.unlinkSync(`${path}/${item}`)
    }
  }
  //fs.rmdirSync(path)
}
//搜索
const dataSearch = (req, res) => {
  //let htmlStr = fs.readFileSync(__dirname + '/data.xml', 'utf8')
  let htmlStr = fs.readFileSync(__dirname + '/dataMiddle.xml', 'utf8')
  //let htmlStr = fs.readFileSync(__dirname + '/dataAll.xml', 'utf8')

  htmlStr = htmlStr
    // .replace(/&lt;/g, '<')
    // .replace(/&gt;/g, '>')
    // .replace(/&quot;/g, '"')
    //.replace(/\n/g, '')
  let itemArr = []
  htmlStr.replace(/<item(([\s\S])*?)<\/item>/g, (word) => {
    itemArr.push(word)
    return word
  })

  const outputDir = `D:/source/m-apps/demo/vuepress/m-app2/test/blogs/md`
  console.log(outputDir)
  //removeFileDir(`${__dirname}/md`)
  removeFileDir(outputDir)
  itemArr.forEach((item, index) => {
    let title = ''
    item.replace(/<title(([\s\S])*?)<\/title>/g, (word) => {
      title = word.slice(7, word.length - 8)
      return word
    })
    let content = ''
    item.replace(/<!\[CDATA\[(([\s\S])*?)]]>/g, (word) => {
      content = word.slice(9, word.length - 3)
      return word
    })
    //content = `# ${title}\n${html2md(content)}`
    content = `# ${title}\n${NodeHtmlMarkdown.translate(content)}`
    fs.writeFile(
      `${outputDir}/${index}.md`,
      content,
      function (err) {
        if (err) {
          return console.log('错误', err)
        }
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
