//con regex podemos validar 
const regex = /\b(apple)+\b/g;

const fruit = 'Apple, que visaje palabras para filtar con matchall';

for (const match of fruit.matchAll(regex)){
    console.log(match);//dice las coincidencias pero tambien nos otorga mas datos como indice
}