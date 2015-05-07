# Smart house

In the previous problem, you've learned how to subscribe to an event which is a very common pattern in lots of
Node.js libraries (socket.io, express.js just to name few). This isn't probably that interesting to you so in this
problem, you will learn how event-driven programs make it easy to develop complex distributed system.

## Task

Take a look at following code:

```js
function makeCoffee(onDone) {
  console.log('Coffee made');
  setTimeout(onDone, 500);
}

function turnOnTheLights(onDone) {
  console.log('Lights turned on!');
  setTimeout(onDone, 100);
}

function onArrival(everythingDone) {
  turnOnTheLights(makeCoffee(everythingDone));
}
```

## Boilerplate

```js
var EventEmitter = require('events').EventEmitter;
var smartHouse = new EventEmitter();

// solve the task and export your smartHouse so we can test it!
module.exports = smartHouse;
```