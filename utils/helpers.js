/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

function requireUserModule(exercise, callback) {
  var userFullPath = exercise.wrapData.mainProgram;
  var userMod;

  try {
    userMod = require(userFullPath);
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
