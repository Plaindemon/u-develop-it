const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  // Your MySQL username,
  user: 'root',
  // Your MySQL password
  password: 'blueSalamander',
  database: 'election',
  // port: 3001
});

module.exports = db;
