/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var filecheck = require('workshopper-exercise/filecheck');
var execute = require('workshopper-exercise/execute');
var comparestdout = require('workshopper-exercise/comparestdout');
var wrappedexec = require('workshopper-wrappedexec');
var helpers = require('./helpers');

function setup(exercise, args) {

  if (!args.dir) throw new Error("missing args.dir");

  // checks that the submission file actually exists
  exercise = filecheck(exercise);

  // execute the solution and submission in parallel with spawn()
  exercise = execute(exercise);

  // compare stdout of solution and submission
  exercise = comparestdout(exercise);

  // wrap up the child process in a phantom wrapper that can
  // mess with the global environment and inspect execution
  exercise = wrappedexec(exercise);

  var suite = require(args.dir + '/suite');

  exercise.addVerifyProcessor(function(verifyCallback) {
    var exercise = this;

    helpers.requireUserModule(exercise, function(err, userMod) {

      if (err) {
        exercise.emit('fail', err);
        return verifyCallback(null, false);
      }

      return suite.verify(exercise, userMod, verifyCallback);
    });

  });

  exercise.addRunProcessor(function(verifyCallback) {
    var exercise = this;

    helpers.requireUserModule(exercise, function(err, userMod) {

      if (err) {
        exercise.emit('fail', err);
        return verifyCallback(null, false);
      }

      return suite.run(exercise, userMod, verifyCallback);
    });

  });

  return exercise;
}

module.exports = setup;
