let orm = require('../config/orm.js');

let events = {
    selectAll: function(cb, res){
        if(cb){
            orm.selectAll('events', cb, res);
        }
    },

    selectOne: function(cb, res, eventName){
        if(cb){
            orm.selectOne('events', cb, res, eventName);
        }
    },

    insertOne: function(accountName, eventName, location, time){
        return orm.insertOne('events', accountName, eventName, location, time);
    },

    updateOne: function(burgerName){
        return orm.updateOne('events', 'devoured', 1, 'burger_name', burgerName);
    }
}

module.exports = events;