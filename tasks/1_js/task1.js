/*
Zmień kod w liniach 10-14, tak aby po uruchomieniu skryptu zostało do konsoli wypisane:
Value: 1
Value: 2
Value: 3
*/

const myFunctions = [];

for (var i = 0; i < 3; i++) {
  myFunctions[i] = function () {
    console.log("Value: " + (i + 1).toString());
  };
}

for (var j = 0; j < 3; j++) {
  myFunctions[j]();
}
