/*
Dodaj implementację funkcji saveFilesInfo, która powinna zapisać w pliku `outputFile` listę plików z katalogu `filesPath` zgodnie z formatem:
File: first.txt size is 575
...
Zadanie zostało zrealizowane poprawnie jeśli po uruchomieniu `node test.js` w terminalu został wypisany tekst 'Success'.
*/

const { readdirSync, writeFileSync, statSync } = require('fs');
const { join } = require('path');

function saveFilesInfo(filesPath, outputFile) {

}

module.exports = saveFilesInfo;
