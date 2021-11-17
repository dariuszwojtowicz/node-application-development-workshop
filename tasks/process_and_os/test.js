const { spawnSync } = require('child_process');
const assert = require('assert');
const { status, stdout } = spawnSync(process.argv[0], [`${__dirname}/task1.js`]);
assert.notStrictEqual(status, 0, 'Must exit with a non-zero code');
assert.match(
  stdout.toString(),
  /^(d|w|l|aix|.+bsd|sunos|gnu)/i,
  'Must output OS identifier'
);
console.log('Success');
