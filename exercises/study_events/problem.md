# What are the events?

In node if you require the events module you can use the so-called 'event emitter' that node itself uses for all of its APIs that emit things.

Events are a common pattern in programming, known more widely as the 'observer pattern' or 'pub/sub' (publish/subscribe). Whereas callbacks are a one-to-one relationship between the thing waiting for the callback and the thing calling the callback, events are the same exact pattern except with a many-to-many API.

The easiest way to think about events is that they let you subscribe to things. You can say 'when X do Y', whereas with plain callbacks it is 'do X then Y'.

Here are few common use cases for using events instead of plain callbacks:

- Chat room where you want to broadcast messages to many listeners
- Game server that needs to know when new players connect, disconnect, move, shoot and jump
- Game engine where you want to let game developers subscribe to events like .on('jump', function() {})
- A low level web server that wants to expose an API to easily hook into events that happen like .on('incomingRequest') or .on('serverError')

> by Max Odgen in his [**art-of-node**](https://github.com/maxogden/art-of-node#events)

## Setup

Although in most of the lessons you will be given already created `EventEmitter`, you may need to require `events` library (don't worry, it's built in).
Then, you can initiate your own EventEmitter by simply doing the following:

```js
var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
```

## Task

You are given an EventEmitter called `phone` (see the boilerplate below). Subscribe to a `call` event and print a message `Ma phone is calling!` every time that event occurs.

## Boilerplate

```js
// emitter is an EventEmitter instance that will emit some events as per Task description
module.exports = function(phone) {

};

```
