const fs = require('fs');
const assert = require('assert');
const { join } = require('path');

const saveFilesInfo = require('./task1');

const outputFile = join(__dirname, 'out.txt');

saveFilesInfo(join(__dirname, 'files'), outputFile);

assert.deepStrictEqual(
  fs.readFileSync(outputFile, { encoding: 'utf8' }),
  'File: first.txt size is 575\n' +
  'File: second.txt size is 1060\n' +
  'File: third.txt size is 448\n'
)
console.log('Success');

try {
  fs.unlinkSync(outputFile);
} catch(err) {
  console.error(err);
}
