/*
Zaimplementuj funkcję tak, aby zwracała child process, który wykonuje kod z pliku 'child.js', do procesu dziecka należy
przekazać jedną zmienną środowiskową o nazwie MY_ENV_VAR.
Zmienna ta powinna mieć wartość równą parametrowi funkcji 'myEnvVar'.
Następnie będąc w folderze child_processes uruchom polecenie 'node test.js'.
Zadanie zostało zrealizowane poprawnie jeśli w terminalu został wypisany tekst 'Success'.
*/

const { execSync } = require('child_process');

function exercise (myEnvVar) {
}

module.exports = exercise;
