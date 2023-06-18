// arrays destructuring

let fruits = ['apple', 'banana'];
let [a, b]= fruits;
console.log(a, fruits[0]);

// objects destructuring

let user ={
    userName: 'Felipe',
    age: 26,
};
let {userName, age} = user;
console.log(userName, user.age);


// spread operator

let person ={name: 'Andres', age: 14};
let country = 'CO';

let data = { ...person, country};
console.log(data)

// rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);