var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database('my.db')

// db.serialize(function() {
//   //db.run("CREATE TABLE lorem (info TEXT)");
//   var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//   for (var i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//   }
//   stmt.finalize();

//   db.each("SELECT rowid AS id, info FROM lorem", function(err, row) {
//       console.log(row.id + ": " + row.info);
//   });
// });

// db.close();

const dbAdd = () => {
  console.log('添加')
  var stmt = db.prepare('INSERT INTO lorem VALUES (?)')
  // for (var i = 0; i < 10; i++) {
  //     stmt.run("Ipsum " + i);
  // }
  stmt.run(`${Date.now()}`)
  stmt.finalize()

  db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
    console.log(row.id + ': ' + row.info)
  })
}

//创建表
const createTable = () => {
  db.run('CREATE TABLE lorem (info TEXT)')
}

//清空表
const dropTable = () => {
  db.run('DROP TABLE lorem')
}

const runSql = async (sql) => {
  db.run(sql)
}

//使用promise封装sql查询
const queryPromise = (sql) => {
  let list = []
  return new Promise(async (resolve, reject) => {
    
    const res = await db.each(sql, function (err, row) {
      console.log(row.id + ': ' + row.info)
      list.push(row)
      if (err) {
        reject(err)
      }
    })
    console.log('res', res)
    console.log('a:', list)
    resolve(list)
  })
}

module.exports = {
  dbAdd: dbAdd,
  dropTable,
  runSql,
  queryPromise,
}
