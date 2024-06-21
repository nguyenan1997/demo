var http = require('http');
var fs = require('fs');
var url = require('url');
var myFirstModule = require('./myfirstmodule')
var adr = 'http://localhost:3000/default.htm?year=2017&month=february';
var q = url.parse(adr, true);
var mysql = require('mysql');
var mongo = require('mongodb');

http.createServer(function (req, res) {
  fs.readFile('index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(3000);


var con = mysql.createConnection({
  host: "localhost",
  user: "learncode",
  password: "123456",
  port: "3307",
  database:"anhoccode"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Ok Kết Nối thành công");
  });
});