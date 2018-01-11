var jwt = require('jsonwebtoken');
var users = require("../api/log-in.js");

module.exports = function(app) {
  app.get("/api/login/:user/:password", function(req, res) {
    users('darko', 'abc123', cb, res);
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