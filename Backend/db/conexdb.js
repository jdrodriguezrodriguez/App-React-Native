const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'myapp'
});

db.connect(function(err){
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});

module.exports = db;