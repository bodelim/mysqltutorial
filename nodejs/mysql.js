var mysql      = require('mysql');
//모듈 불러오기
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '7708qjawns',
  database : 'opentutorials'
});
 
connection.connect();
 
connection.query('SELECT * FROM topic', function (error, results, fields) {
  if (error) {
      console.log(error);
  }
  console.log(results);
});

connection.end();