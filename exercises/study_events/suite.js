/*
 * @fileOverview
 * @author: Mike Grabowski (@grabbou)
 */

'use strict';

var makeVerificator = require('../../utils/helpers').makeVerificator;
var assert = require('chai').assert;
var sinon = require('sinon');
var EventEmitter = require('events').EventEmitter;

function verify(exercise, eventEmitter, verifyCallback) {

  var errors = [];
  var it = makeVerificator(exercise, errors);

  it('solution should return instance of EventEmitter', function() {
    assert.instanceOf(eventEmitter, EventEmitter);
  });

  it('should print message \'Hello NodeSchool\' when event arrives', function() {
    var log = sinon.spy(console, 'log');
    eventEmitter.emit('nodeschool');
    assert.equal(log.callCount, 1);
  });

  verifyCallback(null, errors.length === 0);

}

function run(exercise, eventEmitter, verifyCallback) {
  eventEmitter.emit('nodeschool');
  verifyCallback(null, true);
}

module.exports = {
  verify: verify,
  run: run
};
