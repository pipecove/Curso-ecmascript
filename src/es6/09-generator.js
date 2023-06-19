// son un tipo especial de funcion segun el valordel algoritmo, se destaca por el asterisco en la palabra function

function* iterate(array){
    for(let value of array){
        yield value;            //la palabra reservada retorna cada elemento del array cada que se necesite
    }
}

const it = itarete(['Felipe','Ana','oscar','cristian']);
console.log(it.next().value);       //la palabra reservada next itera y recuerda su estado cada vez que se vuelve a llamar sigue donde se quedo hasta que se acaben los elementos del array

function* getId() {
    let id = 1
    while (true) { 
      id++;
      yield id;
    }
}
    const michiId = getId();
    console.log(michiId.next());