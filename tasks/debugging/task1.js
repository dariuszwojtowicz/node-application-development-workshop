/*
Uruchom ten plik w trybie debugowania i otwórz go w narzędziach deweloperskich w Chrome.
Aplikacja będzie zatrzymanana na linii 12.
Zrób zmianę w kodzie, aby kolejne zatrzymanie aplikacji nastąpiło po pierwszym wykonaniu polecenia IF.
*/

function f (n = 99) {
  if (n === 0) throw Error();
  f(n - 1);
}
f();
