var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  charset  : 'utf8mb4'  // 连接配置中添加字符集选项
});

connection.connect();

// 检查数据库是否存在，如果不存在则创建，并指定默认的字符集为utf8mb4
connection.query("CREATE DATABASE IF NOT EXISTS russ DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci", function (error, results, fields) {
  if (error) throw error;
  console.log('新的数据库已创建，或已存在同名数据库');
});

// 使用新的数据库
connection.query('USE russ', function (error, results, fields) {
  if (error) throw error;
  console.log('开始使用新的数据库');
});

// 在新的数据库中创建一个名为"user"的表，并指定字符集为utf8mb4
connection.query('CREATE TABLE IF NOT EXISTS user (id INT AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30), password VARCHAR(30)) CHARSET=utf8mb4', function (error, results, fields) {
  if (error) throw error;
  console.log('成功在新的数据库中创建名为"user"的表，字符集为utf8mb4，或已存在同名表');
});

connection.end();