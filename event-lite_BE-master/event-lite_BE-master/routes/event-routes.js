var db = require("../models/events.js");
var twitter = require("../api/twitter.js");

module.exports = function(app) {
  app.get("/", function(req, res) {
    console.log('testing');
    res.send('testing');
  });

  app.get("/api/allEvents", function(req, res) {
    db.selectAll(cb, res);
  });

  app.get("/api/selectOne/:eventName", function(req, res) {
    db.selectOne(cb, res, req.params.eventName);
  });

  app.get("/api/twitter/:keyWord", function(req, res) {
    twitter(cb, req.params.keyWord, res);
  });

  app.get("/api/userEvents", function(req, res) {
    db.selectUserEvents(cb, res);
  });

  app.get("/api/userEvents/:username", function(req, res) {
    db.selectUserEvents(cb, req.params.username, res);
  });

  app.post("/api/insertEvent", function(req, res) {
// Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    res.send('true');    
    
    let dateTime = req.body.date + ' ' + req.body.time;
    db.insertOne('root', req.body.title, req.body.organizer, req.body.short, req.body.long, dateTime, req.body.address, req.body.pic, req.body.category1, req.body.category2);
  });

  //Implement Later
  app.delete("/delete", function(req, res) {

  });

  function cb(result, res){
    res.send(result);
  }

};