const http = require("http");
const fs = require("fs");  // for reading files, html
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
const express = require("express")
const hbs = require("express-handlebars");
const routes = require("./routes/index");

var app = express();

app.engine("hbs", hbs({extname: "hbs", defaultLayout: "layout", layoutsDir: __dirname + "/views/layouts/"}));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;






// app.get('/', function(req, res) {
//   res.render("index");
// })
//
// const hostname = "127.0.0.1";
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   // res.writeHead(200, {"Content-Type": "text/html"});
//   // fs.readFile("index.html", function(error, data) {
//   //   if(error) {
//   //     res.writeHead(404);
//   //     res.write("Error: File Not Found");
//   //   } else {
//   //     res.write(data);
//   //   }
//   //   res.end();
//   // })
//
//   // let time = new Time;
//   // // el.innerHTML = time.getFuzzyTime;
//   // res.setHeader("Content-Type", "text/html");
//   // res.end(`<h1>${time.getFuzzyTime}</h1>`);
//   //
//   // // since this is fuzzy time it's ok if we're off by a minute
//   // setInterval(function() {
//   //   time = new Time;
//   //   res.setHeader("Content-Type", "text/html");
//   //   res.end(`<h1>${time.getFuzzyTime}</h1>`);
//   //   // el.innerHTML = time.getFuzzyTime;
//   //   console.log("second");
//   // }, 60000);
// // res.end('Hello Worlds');
//
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });
