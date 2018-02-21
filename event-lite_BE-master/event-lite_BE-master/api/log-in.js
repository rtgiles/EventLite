let con = require('../config/connection.js');
let bcrypt = require('bcrypt');

function validateUser(userName, password, cb, res){
    let sql = `SELECT password FROM users WHERE name="${userName}"`

    con.query(sql, function (err, result) {
        if (err) throw err;

        let hash = result[0].password;

        bcrypt.compare(password, hash, function(err, doesMatch){
        if (doesMatch){
            cb(true, res, userName);
        }else{
            cb(false, res);
        }
        });
    });
}

module.exports = validateUser;