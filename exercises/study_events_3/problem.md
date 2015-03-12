# Pizzas ordered, let's talk!

Nobody is no longer surprised that you've done your previous task pretty well. This time, organisers asked you to give a short
talk for attendees on how to be a successful manager.

## Goal

Starting with following definition:

```js
var EventEmitter = require('events').EventEmitter;

module.exports = function(maximumNumberOfListeners) {
    var lecture = new EventEmitter();

    return lecture;
};
```

begin your lecture by emitting **start** event with a title of your talk only **once** after **first** student arrives (starts **listening** to your event).

Don't forget about **maximumNumberOfListeners** as the venue can only accommodate specific number of people. 
Each time you run your code, this number will change as the place changes as well! Time is money, so they say.

## Hints

- https://nodejs.org/api/events.html#events_event_newlistener - your `lecture` emits event by itself as well!
- https://nodejs.org/api/events.html#events_emitter_emit_event_arg1_arg2
- https://nodejs.org/api/events.html#events_emitter_setmaxlisteners_n
