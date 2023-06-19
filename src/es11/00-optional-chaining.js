const users = {
    pipecove:{
        country: 'MX'
    },
    ana:{
        country: 'CO'
    }
}

console.log(users.pipecove.country);//accedemos al elemento MX con la cadena de comandos
console.log(users?.bebeloper?.country);// aqui solo pregunta si esta usuarios y si esta bebeloper para evitar romper la aplicacion
