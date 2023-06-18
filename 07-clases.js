//declaarando
class User{};
//generamos una instancia de un objeto con una clase 
// const newUser = new User(); 

class user {        //declaramos la clase
    //metodos
    greeting(){         //metodo de saludos
        return 'Hello';
    }
}; 

const pipecove = new user();        //creamos la instancia
console.log(pipecove.greeting());   //usamos el metodo 
const pipecove1 = new user();       //creamos una segunda instancia
console.log(pipecove1.greeting());      //obtenemos dos hello de dos instancias distintas pero de la misma clase

//constructor

class user{
    //constructor
    constructor(){
        console.log('Nuevo usuario');
    }
    greeting(){         //metodo de saludos
        return 'Hello';
    }
}

const Andres = new user();  // new es una palabra reservada para referirse a una clase en este caso la clase es user 


// this: hace rederencia al elemento padre

class user {
    //constructor
    constructor(name){
        this.name = name;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`; // usamos template literals para darle el valor de name y de speak
    }
}

const ana = new user('Ana');        //creamos la instancia y asignamos en name el valor de Ana
console.log(ana.greeting());


// setters and getters 

class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    speak(){
        return 'Hello';
    }
    greeting(){
        return `${this.speak()} ${this.name}`; // usamos template literals para darle el valor de name y de speak
    }

    get uAge(){
        return this.age;        //
    }
    set uAge(n){
        this.age = n;
    }
}

const pipecove2 = new user('FELIPE', 15);   //generar instancia y asignamos valores
console.log(pipecove2.uAge);        //utilizamos el get de uAge del construtor 
console.log(pipecove2.uAge = 20);   //utilizamos el set y cambiamos el valor de uAge





