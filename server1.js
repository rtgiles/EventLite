// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var axios= require("axios");

// Sets up the Express App
// =============================================================
var app = express();
var port = 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.static("public"));

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Routes
// =============================================================


app.get("/", function(req, res) {
  res.render("index");
})

// Get all events
app.get("/events", function(req, res) {
   axios.get('https://cryptic-ridge-95312.herokuapp.com/api/allEvents')
  .then(function (response) {
     res.render('events', {
      events: response.data
  }); 
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    
});


// Get user events
app.get("/userAccount", function(req, res) {
   axios.get('https://cryptic-ridge-95312.herokuapp.com/api/userEvents')
  .then(function (response) {
     res.render('userAccount', {
    username: response.data.username,
      events: response.data.events
  }); 
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
    
});

// app.post("/newEvent", function(req,res) {
  
// })

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
