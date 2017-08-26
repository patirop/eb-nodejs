var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'nodejsdb.cgewjc9q9puc.ap-southeast-1.rds.amazonaws.com',
  port     : 3306,
  user     : 'username',
  password : 'wutpassword',
  database : 'nodejsdb'
});

connection.connect((err) => {
  if(!err) {
    console.log('Host Database Connection Succcess.');
  }
  else {
    console.log('Connection Failed.');
  }
});

exports.getRecords = (callback) => {
  connection.query('SELECT * from team_member', (err, results, fields) => {
    if(err) {
      console.log('query err');
    }
    // console.log(fields);
    callback(results);
  });
}
