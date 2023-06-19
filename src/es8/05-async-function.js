//la promesa con las palabras reservadas async y await nos permite que el programa siga mientras se cumple la promesa 
const fnAsync = () => {
    return new Promise((resolve, reject) => {
        (true)                                              //if ternario
            ? setTimeout(() => resolve('AsynC!!'), 2000)        //signo de pregunta para la sentencia del if
            : reject(new Error('Error!'));                      // dos puntos para la sentencia del else 
    })
}

const anotherFn = async () => {
    const something = await fnAsync();
    console.log(something);
    console.log('Hello');
}

console.log('before');
anotherFn();
console.log('after');