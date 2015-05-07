/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var assert = require('chai').assert;
var sinon = require('sinon');
var chalk = require('chalk');
var EventEmitter = require('events').EventEmitter;

var helpers = require('../../utils/helpers');

function verify(exercise, func, verifyCallback) {

  var errors = [];
  var it = helpers.makeVerificator(exercise, errors);

  // Create event emitter and pass it to user defined function
  var em = new EventEmitter();
  func(em);

  it('should print message when event arrives', function() {
    var log = sinon.spy(console, 'log');
    em.emit('call');
    assert.equal(log.callCount, 1);
  });

  verifyCallback(null, errors.length === 0);

}

function run(exercise, func, verifyCallback) {

  // Create event emitter and pass it to user defined function
  var em = new EventEmitter();
  func(em);

  var numberOfCalls = helpers.randomInteger(5, 20);

  // Emit new call event
  var interval = setInterval(function newStudentArrives() {
    em.emit('call');
  }, 1500 / numberOfCalls);

  setTimeout(function everybodyArrived() {
    clearInterval(interval);
    console.log(chalk.green(numberOfCalls, 'calls has been received, yay!'));
    verifyCallback(null, true);
  }, 2000);

}

module.exports = {
  verify: verify,
  run: run
};
