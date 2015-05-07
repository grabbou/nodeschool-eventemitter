# Smart house

In the previous exercise, you've learned how to subscribe to an event which is a very common pattern in lots of
Node.js libraries (socket.io, express.js just to name few). 

This isn't probably that interesting to you so in this problem, you will learn how event-driven programs can make it easy to develop complex distributed system where multiple parallel actions need to happen at one time.

## Task

Your task is to rewrite the below callback-based implementation of SmartHouse to an EventEmitter based one keeping all its capabilities. Note - actions should run in parallel and should not wait for each other to complete.

```js
function makeCoffee(callback) {
  setTimeout(function() {
    console.log('Coffee made');
    callback(null);
  }, 500);
}

function turnOnTheLights(callback) {
  setTimeout(function() {
    console.log('Lights turned on!');
    callback(null);
  }, 100);
}

function onArrival(everythingDone) {
  turnOnTheLights(function(err) {
    if (err) return everythingDone(err);
    makeCoffee(everythingDone);
  });
}

onArrival(function(err) {
  if (err) {
    console.log('There was an error', err.message);
  } else {
    console.log('Everything is done');
  }
);
```
As you can see, our SmartHouse, when we arrive, first turns on the lights and if the operation was successful, makes us a coffee so we have everything ready to start our after-work chillout. 

Unfortunately, with one-to-one flow, each action highly depends on another one which makes it hard to scale the system and add new elements. Imagine you want to add a new element to the system one year later (e.g. turn on TV when coffee is ready). In 99% cases it will require modifying our small core platform which can produce new bugs. 

By implementing event-driven flow, you can easily plug in new elements using `middleware` pattern that you will learn in next problems.

## Boilerplate

```js
var EventEmitter = require('events').EventEmitter;
var smartHouse = new EventEmitter();

// solve the task and export your smartHouse so we can test it!
module.exports = smartHouse;
```
