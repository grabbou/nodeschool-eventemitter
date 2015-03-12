var exercise = require("workshopper-exercise")();
var filecheck = require("workshopper-exercise/filecheck");
var execute = require("workshopper-exercise/execute");
var comparestdout = require('workshopper-exercise/comparestdout');

// checks that the submission file actually exists
exercise = filecheck(exercise);

// execute the solution and submission in parallel with spawn()
exercise = execute(exercise);

// set up the data file to be passed to the submission
exercise.addSetup(function exerciseSetup(mode, callback) {

  var events = ['event1', 'event2', 'event3'];

  this.submissionArgs = events;
  this.solutionArgs = events;

  process.nextTick(callback);
});

exercise = comparestdout(exercise);

module.exports = exercise;
