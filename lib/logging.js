/*jslint node: true*/
"use strict";

var log4js = require('log4js'),
  loaded = false;

module.exports = exports = function(config) {
  if (!loaded) {
    log4js.configure(config.log4js, {
      cwd: __dirname + '/../log/'
    });
    loaded = true;
  }
  return log4js;
};