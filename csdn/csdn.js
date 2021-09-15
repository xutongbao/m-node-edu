const fs = require('fs')
const html2md = require('html-to-md')
const { NodeHtmlMarkdown } = require('node-html-markdown')
//搜索
const dataSearch = (req, res) => {
  const { dataType = 0 } = req.body

  let dataUrl = {
    0: '/data.xml',
    1: '/dataMiddle.xml',
    2: '/data_9142.xml',
  }[dataType]
  const htmlStr = fs.readFileSync(__dirname + dataUrl, 'utf8')

  //提取所有item标签存入数组中
  let itemArr = []
  htmlStr.replace(/<item(([\s\S])*?)<\/item>/g, (word) => {
    itemArr.push(word)
    return word
  })

  //md文件输出路径
  const outputDir = `D:/source/blog/src/md`
  removeFileDir(outputDir)

  itemArr.forEach((item, index) => {
    //提取标题
    let title = ''
    item.replace(/<title(([\s\S])*?)<\/title>/g, (word) => {
      title = word.slice(7, word.length - 8)
      return word
    })
    //提取博客内容
    let content = ''
    item.replace(/<!\[CDATA\[(([\s\S])*?)]]>/g, (word) => {
      content = word.slice(9, word.length - 3)
      return word
    })
    //把标题和内容组织在一起，形成md文件
    const mdFile = `---
title: '${title}'
---   
${html2md(content)}`

    //创建md文件
    fs.writeFile(`${outputDir}/${index}.md`, mdFile, function (err) {
      if (err) {
        return console.log('错误', err)
      }
    })
  })

  res.send({
    state: 1,
    data: {
      count: itemArr.length,
    },
    message: 'md文件创建成功',
  })
}

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

module.exports = {
  csdnSearch: dataSearch,
}
