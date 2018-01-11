// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = 8080;
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "events" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// EventsLite Data
// =============================================================
var events= [
    {
     event_creator : "Will",
     event_name : "Burger Run",
     event_location : "Au Cheval",
     event_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
     event_date : "2018-07-15 14:30:00"
    },
    {
        event_creator : "Darko" ,
        event_name : "Beer Run" ,
        event_location : "Foremost Liquers" ,
        event_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        event_date :  "2018-07-15 14:30:00"
    },
    {
        event_creator : "Antoine" ,
        event_name : "Basketball Run" ,
        event_location : "United Center" ,
        event_date :  "2018-07-15 14:30:00"
    },
    {
        event_creator : "Ron" ,
        event_name : "Chicken Nugget Run" ,
        event_location : "Wendys" ,
        event_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        event_date :  "2018-07-15 14:30:00"
    },
    {
        event_creator : "Van" ,
        event_name : "Game Run" ,
        event_location : "Game Stop" ,
        event_description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        event_date :  "2018-07-15 14:30:00"
    }
  ];

// Routes
// =============================================================


// Get all events
app.get("/all", function(req, res) {
  res.render(events);
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});