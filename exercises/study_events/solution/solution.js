var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter();

em.on('nodeschool', function onEventReceived() {
  console.log('Hello NodeSchool!');
});

module.exports = em;
