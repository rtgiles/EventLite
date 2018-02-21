var jwt = require('jsonwebtoken');
var users = require("../api/log-in.js");
var newUser = require("../api/sign-up.js");

module.exports = function(app) {
  app.post("/api/login", function(req, res) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    console.log(req.body.username);
    users(req.body.username, req.body.password, cb, res);
  });

  app.post("/api/signup", function(req, res) {
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
    
    newUser(req.body.username, req.body.password, cb, res);
  });

  app.get("/userAccount/:token", function(req, res){
    verify(req.params.token);
  });

  function cb(result, res, userName){
    let token = false;

    if(result){
      let token = jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        data: userName,
      }, 'WeAreSparTans');
      res.send(token);
    }
    else{
      console.log('Log in Failed')
      res.send(token);
    }
  }
}

function verify(token){
  let decoded = jwt.verify(token, 'WeAreSparTans');
  console.log(decoded);
}