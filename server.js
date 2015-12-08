
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
var SERVO_CLOCKWISE    = "turnClockwise"
var SERVO_NO_CLOCKWISE = "turnNoclockwise"
var SERVO_STOP         = "stop"
var servoStatus        = SERVO_STOP // Stopped by default


// ====================================================== //
// == HTTP Routing
// ====================================================== //

app.get("/api/test", function (req, res) {
  res.status = 200
  res.send("Hello world\n")
})

app.get("/api/servo/turnClockwise", function (req, res) {
  console.log("Configuring servo for turn clockwise")
  servoStatus = SERVO_CLOCKWISE

  res.status = 200
  res.send("Turning like the clock")
})

app.get("/api/servo/turnNoClockwise", function (req, res) {
  console.log("Configuring servo for turn counterclockwise")
  servoStatus = SERVO_NO_CLOCKWISE

  res.status = 200
  res.send("Turning counterclockwise")
})

app.get("/api/servo/stop", function (req, res) {
  console.log("Configuring the servo to stop")
  servoStatus = SERVO_STOP

  res.status = 200
  res.send("Stoping the servo")
})

app.get("/api/servoDirection", function (req, res) {
  res.status = 200;

  console.log("Sending: " + servoStatus)
  if(servoStatus === SERVO_CLOCKWISE) {
    res.send("@1")
  }
  else if(servoStatus === SERVO_NO_CLOCKWISE) {
    res.send("@0")
  }
  else {
    res.send("@2")
  }
})


// ====================================================== //
// == APP STARTUP
// ====================================================== //
http.listen(3000, function () {
  console.log('App listen on port 3000')
})
