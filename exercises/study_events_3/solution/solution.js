var EventEmitter = require('events').EventEmitter;

module.exports = function(maximumNumberOfListeners) {
  var lecture = new EventEmitter();

  lecture.setMaxListeners(maximumNumberOfListeners);

  lecture.once('newListener', function() {
    this.emit('start', 'How to be a successful manager?');
  });

  return lecture;
};
