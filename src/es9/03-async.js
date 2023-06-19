async function* anotherGenerator (){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(Response => console.log(Response.value));//next para pedir cada valor y el estado que genera el generator
other.next().then(Response => console.log(Response.value));//then que va a pasar 
other.next().then(Response => console.log(Response.value));
console.log('Hello!');

// Dentro de un for 

async function arrayOfNames(array){     // el aplicativo no se bloquea y permite que el after se muestre primero y luego si presenta el for 
    for await (let value of array){
        console.log(value);
    }
};

const names = ['oscar', 'ana', 'felipe'];
console.log('after');