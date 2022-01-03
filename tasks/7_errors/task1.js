/*
Dodaj obsługę błędów w metodzie `readFile`: w przypadku gdy odczyt się nie powiedzie,
powinien zostać rzucony błąd: `failed to read`.
Zadanie zostało zrealizowane poprawnie jeśli po uruchomieniu `node test.js` w terminalu został wypisany tekst 'Success'.
*/

const fs = require('fs');

async function readFile(filePath) {
  try {
    const fileContent = await fs.promises.readFile(filePath);
    return fileContent;
  } catch {
    throw new Error('failed to read');
  }
}

module.exports = readFile;
