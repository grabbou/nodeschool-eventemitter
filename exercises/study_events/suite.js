/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var makeVerificator = require('../../utils/helpers').makeVerificator;
var assert = require('chai').assert;
var sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;

function verify(exercise, func, verifyCallback) {

  var errors = [];
  var it = makeVerificator(exercise, errors);

  // Create event emitter and pass it to user defined function
  var em = new EventEmitter();
  func(em);

  it('should print message when event arrives', function() {
    var log = sinon.spy(console, 'log');
    em.emit('newStudent');
    assert.equal(log.callCount, 1);
  });

  verifyCallback(null, errors.length === 0);

}

function run(exercise, func, verifyCallback) {

  // Create event emitter and pass it to user defined function
  var em = new EventEmitter();
  func(em);

  // Emit new student event
  em.emit('newStudent');

  verifyCallback(null, true);
}

module.exports = {
  verify: verify,
  run: run
};
