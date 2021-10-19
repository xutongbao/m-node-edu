const sqlite3 = require('sqlite3').verbose()
const NODE_ENV = process.env.NODE_ENV || 'development'
console.log('NODE_ENV:', NODE_ENV)
let db = {}
if (NODE_ENV === 'production') {
  db = new sqlite3.Database('/temp/dbFile/my_prod.db')
} else if (NODE_ENV === 'development') {
  db = new sqlite3.Database('/temp/dbFile/my_dev.db')
} else if (NODE_ENV === 'codesandbox') {
  db = new sqlite3.Database('./codesandbox.db')
}
//执行sql语句
const runSql = async (sql) => {
  return new Promise(async (resolve, reject) => {
    db.run(sql, (err) => {
      resolve(err)
    })
  })
}

//查询
const queryPromise = async (sql) => {
  return new Promise(async (resolve, reject) => {
    db.all(sql, function (err, rows) {
      if (err) {
        reject(err)
      } else {
        resolve(rows)
      }
    })
  })
}

module.exports = {
  runSql,
  queryPromise,
}
