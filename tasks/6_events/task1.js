/*
Zarejestruj funkcję listener na EventEmitterze ee, tak aby funkcja listener została wywołana dokładnie 1 raz.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
 */

const assert = require('assert');
const { EventEmitter } = require('events');

const ee = new EventEmitter();
let count = 0;

setInterval(() => {
  ee.emit('tick');
}, 100);

function listener () {
  count++;
  setTimeout(() => {
    assert.equal(count, 1);
    assert.equal(this, ee);
    console.log('Success');
  }, 250);
}
