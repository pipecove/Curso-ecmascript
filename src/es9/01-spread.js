//admite el uso de spread ... en objetos

const user = {
    username: 'pipecove',
    age: 26,
    country: 'CO'
};
const {username, ...values} = user;
console.log(username);
console.log(values);