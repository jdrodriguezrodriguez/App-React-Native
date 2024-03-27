const db = require('../db/conexdb');

const User = {};

User.create = (user, result) => {
    const sql = 'INSERT INTO users(name, lastname, email, phone, password, img, create_at, update_at) VALUES(?, ?, ?, ?, ?, ?, ?, ?)';
    db.query(sql, [user.name, user.lastname, user.email, user.phone, user.password, user.img, new Date(), new Date()], (err, res) => {
        if(err) {
            console.log('Error:', err);
            result(err, null);
        } else {
            console.log('Id del nuevo usuario:', res.insertId);
            result(null, res.insertId);
        }
    });
};

module.exports = User;
