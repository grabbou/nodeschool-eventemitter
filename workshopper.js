#!/usr/bin/env node

var workshopper = require('workshopper');
var path = require('path');

function fpath(f) {
  return path.join(__dirname, f);
}

workshopper({
  name: 'nodeschool-events',
  title: 'Events workshop',
  subtitle: 'Learn how to applications on top of Node.js events system',
  appDir: __dirname,
  menuItems: [],
  exerciseDir: fpath('./exercises/')
});
