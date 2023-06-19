const string = 'Hello';
//genera un string de 10 y rellena antes de hello con la palabra hi para completar los 10
 console.log(string.padStart(10, 'hi'));
//genera un string de 10 y rellena despues del hello las posciones que se necesiten
console.log(string.padEnd(10, '_'));