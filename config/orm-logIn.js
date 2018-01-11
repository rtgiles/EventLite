let con = require('./connection.js');

let orm = {
    selectAll: function(tableName, cb, res, username, password){
        let sql = 'SELECT password FROM ??'

        con.query(sql, [tableName, ], function (err, result) {
            if (err) throw err;

            if(cb){
                cb(result, res);
            }
            else{
                return result;
            }
        });
    },
};

module.exports = orm;