const anotherFunction = () => {
    return new Promise((resolve, reject) => {
        if(true){
            resolve('hey!!');
        } else {
            reject('paila');
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err))
    .finally(() => console.log('finally'));