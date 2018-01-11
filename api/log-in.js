let con = require('../config/connection.js');

function validateUser(userName, password, cb, res){
    let sql = 'SELECT password FROM users'

    con.query(sql, function (err, result) {
        if (err) throw err;

        if(result[0].password == password){
            cb(true, res, userName);
        }
        else{
           cb(false, res);
        }
    });
}

module.exports = validateUser;