// Nos devuelve una matriz de cualquie submatriz
//flat
const array = [1, 2, 3, 4, [1, 2, 3, [1, 2, 3]]];
console.log(array.flat(3));//nos aplana el array y lo muestra en los niveles que le pongamos dentro de los parentesis

//flatmap

const array2 = [1, 2, 3, 4, 5];
console.log(array2.flatMap(v => [v, v *2]));//nos regresa el array normal y le aplica la transformacion que le estamos pasando en la arrow function 

