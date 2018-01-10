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

  app.post("/api/insertEvent/:accountName/:eventName/:location/:time", function(req, res) {
    db.selectOne(req.params.accountName, req.params.eventName, req.params.location, req.params.time);
  });

  //Implement Later
  app.delete("/delete", function(req, res) {

  });

  function cb(result, res){
    res.send(result);
  }

};