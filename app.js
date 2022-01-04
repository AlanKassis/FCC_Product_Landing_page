var express = require('express');
var path = require('path');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html");
})
let port = process.env.PORT;
if (port == null || port =="") {
  port = 8000;
}
app.listen(port);
console.log(`Listening on port ${port}`)





module.exports = app;
