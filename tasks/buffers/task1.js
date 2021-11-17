/*
Korzystając z Buffer API w pewien sposób, zmień kod tak, aby zmienna 'base64' zawierała reprezentację zmienniej 'str' w base64.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
 */

const assert = require('assert');
const str = 'buffers are neat';
const base64 = ''; // Magic here
console.log(base64);
assert.equal(base64, Buffer.from([
  89,110,86,109,90,109,86,121,99,
  121,66,104,99,109,85,103,98,109,
  86,104,100,65,61,61]));
console.log('Success!');
