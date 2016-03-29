"use strict";

/* Module dependencies */
var path = require('path');
var logger = require('morgan');
var express = require('express');

var app = express();
var router = express.Router();

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, '../')));

/* Redirect to index.html file */
app.use('/', router.get('/*', function (req, res, next) {
  res.sendFile('index.html', {root: './'});
}));

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
    res.status(err.status || 500).json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message,
    error: {}
  });
});

module.exports = app;