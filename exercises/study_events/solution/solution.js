var EventEmitter = require('events').EventEmitter;
var em = new EventEmitter();
var events = process.argv.slice(2);

events.forEach(function setupListeners(event) {
  em.on(event, function() {
    console.log(event, 'has been received');
  });
  em.emit(event);
});
