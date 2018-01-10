let con = require('./connection.js');

let orm = {
    selectAll: function(tableName, cb, res){
        let sql = 'SELECT * FROM ??'

        con.query(sql, [tableName], function (err, result) {
            if (err) throw err;

            if(cb){
                cb(result, res);
            }
            else{
                return result;
            }
        });
    },

    selectOne: function(tableName, cb, res, eventName){
        let sql = `SELECT * FROM ?? WHERE event_name="${eventName}"`

        console.log(sql);

        con.query(sql, [tableName], function (err, result) {
            if (err) throw err;

            if(cb){
                console.log(result);
                cb(result, res);
            }
            else{
                return result;
            }
        });
    },

    insertOne: function(tableName, accountName, eventName, location, time, cb){
        let sql = 'INSERT INTO ?? (account_name, event_name, event_location, event_time) VALUES (?)'

        con.query(sql, [tableName ,accountName, eventName, location, time], function (err, result) {
            if (err) throw err;
            
            if(cb){
                cb(result);
            }
        });
    },

    //Implement Later
    updateOne: function(tableName, columnName, newValue, columnID, columnValue, cb){
        let sql = 'UPDATE ?? SET ?? = ? WHERE ?? = ?'

        con.query(sql, [tableName, columnName, newValue, columnID, columnValue], function (err, result) {
            if (err) throw err;
            
            if(cb){
                cb(result);
            }
        });
    }
};

module.exports = orm;