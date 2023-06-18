function newUer(name, age, country){
    var name = name || 'felipe';
    var age = age || 27;
    var country = country || 'colombia';
    console.log(name, age, country);
}

newUer();
newUer('david', 13, 'CO');

// nueva forma en ecmas6

function newAdmin ( name = 'Felipe', age = 15, country = 'Cl'){
    console.log(name, age, country);
}
newAdmin();