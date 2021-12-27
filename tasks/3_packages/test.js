const assert = require('assert');
const semver = require('semver');
const pkg = require('./package.json');

assert.doesNotThrow(() => {
  require('react');
}, 'react should be installed');

assert.doesNotThrow(() => {
  require('redux');
}, 'redux should be installed');

const { dependencies = {} } = pkg;
const deplist = Object.entries(dependencies);
const react = deplist.find(([name]) => name === 'react').pop();
const redux = deplist.find(([name]) => name === 'redux').pop();
const { range } = new semver.Range(react);

assert(range === '>=16.0.0 <17.0.0', 'react should be greater than or equal to 16.0.0');

assert(redux === '4.1.2', 'redux should be at exactly 4.1.2');

console.log('Success');
