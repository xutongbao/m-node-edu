const fs = require('fs')
const html2md = require('html-to-md')
const { NodeHtmlMarkdown } = require('node-html-markdown')
const mommet = require('moment')
const { SitemapStream, streamToPromise } = require('sitemap')
const { Readable } = require('stream')

//md文件输出路径
const outputDir = `D:/source/blog/src/md`

//搜索
const dataSearch = (req, res) => {
  const { dataType = 0 } = req.body

  let dataUrl = {
    0: '/data.xml',
    1: '/dataMiddle.xml',
    2: '/data_9142.xml'
  }[dataType]
  const htmlStr = fs.readFileSync(__dirname + dataUrl, 'utf8')

  //提取所有item标签存入数组中
  let itemArr = []
  htmlStr.replace(/<item(([\s\S])*?)<\/item>/g, (word) => {
    itemArr.push(word)
    return word
  })

  removeFileDir(outputDir)

  let mdFileNameArr = []
  itemArr.forEach((item, index) => {
    //提取标题
    let title = ''
    item.replace(/<title(([\s\S])*?)<\/title>/g, (word) => {
      title = word.slice(7, word.length - 8)
      return word
    })

    //提取标题
    let pubDate = ''
    item.replace(/<pubDate(([\s\S])*?)<\/pubDate>/g, (word) => {
      pubDate = word.slice(9, word.length - 10)
      return word
    })

    const pageDate = mommet(pubDate).format('YYYY-MM-DD HH:mm:ss')
    const mdFileName = mommet(pubDate).format('YYYY-MM-DD_HH_mm_ss')

    //提取博客内容
    let content = ''
    item.replace(/<!\[CDATA\[(([\s\S])*?)]]>/g, (word) => {
      content = word.slice(9, word.length - 3)
      return word
    })
    //把标题和内容组织在一起，形成md文件
    const mdFile = `---
title: '${title}'
date: ${pageDate}
---   
${html2md(content)}`

    //创建md文件
    mdFileNameArr.push(mdFileName)
    fs.writeFile(`${outputDir}/${mdFileName}.md`, mdFile, function (err) {
      if (err) {
        return console.log('错误', err)
      }
    })
  })

  res.send({
    state: 1,
    data: {
      count: itemArr.length,
      mdFileNameArr
    },
    message: 'md文件创建成功'
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

//遍历文件夹获取link列表
const getLinks = async ({type}) => {
  return await new Promise((resolve, rejects) => {
    fs.readdir(outputDir, function (err, files) {
      if (err) {
        console.warn(err)
      } else {
        let links = files.map(item => {
          return { url: `http://${type}.xutongbao.top/blog/src/md/${item.replace('md', 'html')}`, changefreq: 'daily', priority: 0.3 }
        })
        resolve(links)
      }
    })
  })
}

//根据link列表生成sitemap.xml文件
const getSitemap = async (req, res) => {
  const { type = 'www' } = req.body
  const links = await getLinks({type})
  //const links = [{ url: '/page-1/', changefreq: 'daily', priority: 0.3 }]

  // Create a stream to write to
  const stream = new SitemapStream({ hostname: 'http://blog.xutongbao.top' })

  // Return a promise that resolves with your XML string
  let mySitemap = '1'
  await streamToPromise(Readable.from(links).pipe(stream)).then((data) => {
    mySitemap = data.toString()
  })
  const sitemapFilePath = `./csdn/sitemap-${type}.xml`
  fs.writeFile(sitemapFilePath, mySitemap, { encoding: 'utf8' }, (err) => {})

  res.send({
    state: 1,
    data: {
      mySitemap,
      links
    },
    message: 'sitemap'
  })
}

module.exports = {
  csdnSearch: dataSearch,
  csdnSitemap: getSitemap
}
