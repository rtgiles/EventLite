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

insertOne: function(tableName, accountName, title, organizer, short_desc, full_desc, event_date, event_address, eventLinkPic, eventCategoryOne, eventCategoryTwo, cb){
        let sql = `INSERT INTO events (account_name, title, organizer, short_desc, full_desc, event_date, event_address, eventLinkPic, eventCategoryOne, eventCategoryTwo) VALUES ("${accountName}", "${title}", "${organizer}", "${short_desc}", "${full_desc}", "${event_date}", "${event_address}", "${eventLinkPic}", "${eventCategoryOne}", "${eventCategoryTwo}")`

        con.query(sql, function (err, result) {
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
    },

    selectUser: function(tableName, username, cb, res){
        let sql = `SELECT * FROM ?? WHERE account_name="${username}"`

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
};

module.exports = orm;