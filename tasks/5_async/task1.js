/*
Zmień poniższy kod w liniach 17-20, tak aby po uruchomieniu skryptu zostało do konsoli wypisane:
Patience
you must
have my
young Padawan
*/

const firstPromise = () => Promise.resolve('you must');
const secondPromise = () => Promise.resolve('have my');

function firstFunction() {
  firstPromise().then(res => console.log(res));
  console.log('Patience');
}

function secondFunction() {
  console.log(secondPromise());
  console.log('young Padawan');
}

firstFunction();
secondFunction();
