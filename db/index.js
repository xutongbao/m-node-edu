const sqlite3 = require('sqlite3').verbose()
console.log('db', process.env.PORT)
let db = {}
if (process.env.PORT === 81) {
  db = new sqlite3.Database('./my_81.db')
} else {
  db = new sqlite3.Database('./my_online.db')
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
      console.log(rows)
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
