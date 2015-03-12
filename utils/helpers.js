/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var path = require('path');

function requireUserModule(exercise, callback) {
  var userFullPath = exercise.args[0];
  var userMod;
  try {
    userMod = require(path.resolve(userFullPath));
  } catch (e) {
    return callback('Error loading module: ' + e.message);
  }

  return callback(null, userMod);
}

function makeVerificator(exercise, errors) {
  return function(msg, runner) {
    try {
      runner();
      exercise.emit('pass', msg);
    } catch (e) {
      errors.push(msg);
      exercise.emit('fail', msg);
    }
  }
}

module.exports = {
  requireUserModule: requireUserModule,
  makeVerificator: makeVerificator
};
