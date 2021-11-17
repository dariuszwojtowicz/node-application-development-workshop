/*
Ten process obecnie się wysypuje.
Nie usuwając żadnego kodu, ani nie używając try/catch, dodaj kod, który naprawi ten process.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
 */

const { EventEmitter } = require('events');

process.nextTick(console.log, 'Success');

const ee = new EventEmitter();

ee.emit('error', Error('timeout'));
