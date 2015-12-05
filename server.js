
// ====================================================== //
// == THIRD PARTY MODULES FOR APPLICATION
// ====================================================== //
var express    = require('express')
var app        = express()
var bodyParser = require('body-parser')
var http       = require('http').Server(app)


// ====================================================== //
// == APP CONFIG
// ====================================================== //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// ====================================================== //
// == Custom variables
// ====================================================== //
var servoTurningLeft = false;


// ====================================================== //
// == HTTP Routing
// ====================================================== //

app.get("/api/test", function (req, res) {
  res.status = 200
  res.send("Hello world\n")
})

app.get("/api/servoDirection", function (req, res) {
  res.status = 200;

  if (servoTurningLeft) {
    res.send("@1")
  }
  else {
    res.send("@0")
  }

  //servoTurningLeft = !servoTurningLeft;
})


// ====================================================== //
// == APP STARTUP
// ====================================================== //
http.listen(3000, function () {
  console.log('App listen on port 3000')
})
