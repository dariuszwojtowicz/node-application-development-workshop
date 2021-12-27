/*
Odczytaj plik o nazwie 'read_me.txt'.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
*/

const assert = require('assert');
const fs = require('fs');
const readableStreamOfReadmeTxt = ''; // Magic here
readableStreamOfReadmeTxt.on('data', (data) => {
  console.log('Data received: ', data);
  assert.strictEqual(data, 'Read me!\n');
  readableStreamOfReadmeTxt.on('end', () => { console.log('Success') });
});


