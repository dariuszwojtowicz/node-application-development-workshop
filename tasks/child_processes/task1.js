/*
Zaimplementuj funckję tak, aby zwracała 'child process' z jedną zmienną środowiskową o naziwe MY_ENV_VAR.
Zmienna ta powinna mieć wartość równą parametrowi funkcji 'myEnvVar'.
Następnie będąc w folderze child_processes uruchom polecenie 'node test.js'.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
*/
const { execSync } = require('child_process');

function exercise (myEnvVar) {
  return execSync(
    `node child.js`,
    { env: { MY_ENV_VAR: myEnvVar } }
  )
}

module.exports = exercise;
