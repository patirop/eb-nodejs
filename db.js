var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'nodejsdb.cgewjc9q9puc.ap-southeast-1.rds.amazonaws.com',
  port     : 3306,
  user     : 'username',
  password : 'wutpassword',
  database : 'nodejsdb',
  timeout: 60000
});

connection.connect((err) => {
  if(!err) {
    console.log({
      tag: "db connection",
      success: true,
      msg: 'Host Database Connection Succcess.',
      err: err
    });
  }
  else {
    console.log({
      tag: "db connection",
      success: false,
      msg: 'Host Database Connection Failed.',
      err: err
    });
  }
});

exports.getRecords = (callback) => {
  connection.query('SELECT * from team_member', (err, results, fields) => {
    if(err) {
      console.log('query err');
    }
    callback(results);
  });
}
