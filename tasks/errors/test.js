const fs = require('fs');
const assert = require('assert');
const readFile = require('./task1');

async function check () {
  await assert.rejects(
    readFile('invalid-filepath'),
    new Error('failed to read')
  );
  assert.deepEqual(
    await readFile(__filename),
    fs.readFileSync(__filename)
  );
  console.log('Success');
}

check();
