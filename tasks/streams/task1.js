/*
Korzystając z Buffer API dopisz kod, który spowoduje, że wszystkie dane z 'readable' zostaną zapisane do streamu 'writable'.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
*/

const { Readable, Writable } = require('stream');
const assert = require('assert');
const createWritable = () => {
  const sink = [];
  let piped = false;
  setImmediate(() => {
    assert.strictEqual(piped, true, 'use the pipe method');
    assert.deepStrictEqual(sink, ['a', 'b', 'c']);
  });
  const writable = new Writable({
    decodeStrings: false,
    write(chunk, enc, cb) {
      sink.push(chunk);
      cb();
    },
    final() {
      console.log('Success');
    }
  });
  writable.once('pipe', () => {
    piped = true
  });
  return writable;
}
const readable = Readable.from(['a', 'b', 'c']);
const writable = createWritable();

