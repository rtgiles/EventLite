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

    selectUserEvents: function(cb, username, res){
        if(cb){
            orm.selectUser('events', username, cb, res);
        }
    },

    insertOne: function(accountName, title, organizer, short_desc, full_desc, event_date, event_address, eventLinkPic, eventCategoryOne, eventCategoryTwo){
        return orm.insertOne('events', accountName, title, organizer, short_desc, full_desc, event_date, event_address, eventLinkPic, eventCategoryOne, eventCategoryTwo);
    },

    updateOne: function(burgerName){
        return orm.updateOne('events', 'devoured', 1, 'burger_name', burgerName);
    }


}

module.exports = events;