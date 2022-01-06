var express = require('express');
var path = require('path');
// const nm_dependencies = ['@fortawesome'];
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');

var app = express();
app.use(express.static(path.join(__dirname, 'public')))


// nm_dependencies.forEach(dep => {
//   app.use(`/${dep}`, express.static(path.resolve(`node_modules/${dep}`)));
// })

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
