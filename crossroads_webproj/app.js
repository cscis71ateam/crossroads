var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose');
require('dotenv').config();


//Connect to the database
var dbUser = process.env.DB_USER;
var dbPW = process.env.DB_PWD;
var dbUri= 'mongodb://'
        + dbUser + ':'
        + dbPW
        //+ '@beehive-shard-00-00-en2oa.mongodb.net:27017,beehive-shard-00-01-en2oa.mongodb.net:27017,beehive-shard-00-02-en2oa.mongodb.net:27017/projtodo?ssl=true&replicaSet=Beehive-shard-0&authSource=admin';
        + '@beehive-shard-00-00-en2oa.mongodb.net:27017,beehive-shard-00-01-en2oa.mongodb.net:27017,beehive-shard-00-02-en2oa.mongodb.net:27017/crossroads?ssl=true&replicaSet=Beehive-shard-0&authSource=admin';

mongoose.connect(dbUri)
  .then(() => {
    console.log("Database connection successfull.");
  })
  .catch((err) => {
    console.log(err);
  });

var index = require('./routes/index');
var info = require('./routes/info');
var blogs = require('./routes/blogs');
var apiblogs = require('./routes/api/api-blogs');
var app = express();

app.locals.moment = require('moment');

//Global variables to share data across page
app.locals.blogList = [{description:"Sample blog",startDate:"2018-03-20",endDate:"2018-04-19",assignee:"Mo Faruqe"}];

app.use(cookieParser('cscie31-secret'));
app.use(session({
  secret: "cscie31",
  resave: true,
  saveUninitialized: false
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/info', info);
app.use('/blogs', blogs);
app.use('/api/blogs', apiblogs);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
