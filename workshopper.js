#!/usr/bin/env node

var workshopper = require('workshopper');
var path = require('path');

function fpath(f) {
  return path.join(__dirname, f);
}

workshopper({
  name: 'nodeschool-eventemitter',
  title: 'EventEmitter workshop',
  subtitle: 'Learn how to use Event Emitter in your projects',
  appDir: __dirname,
  menuItems: [],
  exerciseDir: fpath('./exercises/')
});
