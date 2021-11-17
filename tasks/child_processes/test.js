const assert = require('assert');
const { equal } = assert.strict;
const exercise = require('./task1');

let sp = null;
try {
  sp = exercise('is set');
  assert(sp, 'Exercise function should return a child process instance');
  if (Buffer.isBuffer(sp)) {
    equal(sp.toString().trim(), 'Success', 'Child process misconfigured');
    process.stdout.write(sp);
    return;
  }
} catch (err) {
  const { status} = err;
  if (status == null) throw err;
  equal(status, 0, 'Exit code should be 0');
  return;
}

if (!sp.on) {
  const { stdout, stderr } = sp;
  if (stderr.length > 0) process.stderr.write(stderr);
  if (stdout.length > 0) process.stdout.write(stdout);
  equal(sp.status, 0, 'Exit code should be 0');
  equal(stdout.toString().trim(), 'Success', 'Child process misconfigured');
  return;
}

let out = '';
if (sp.stderr) sp.stderr.pipe(process.stderr);
if (sp.stdout) {
  sp.stdout.once('data', (data) => { out = data });
  sp.stdout.pipe(process.stdout);
} else {
  out = 'Success';
}
const timeout = setTimeout(() => {
  equal(out.toString().trim(), 'Success', 'Child process misconfigured');
}, 1000);

sp.once('exit', (status) => {
  equal(status, 0, 'Exit code should be 0');
  equal(out.toString().trim(), 'Success', 'Child process misconfigured');
  clearTimeout(timeout);
});
