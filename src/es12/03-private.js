class user {
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //metodos
    #speak(){       //con el numeral se vuelve privado y solo se puede acceder en la misma clase
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
