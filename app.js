const { calcSum, calcMultiply } = require('./calculate');
const data = require('./data.json')

var name = "Namaste NodeJS";

let a = 10;
let b = 20;

calcSum(a,b);

calcMultiply(a, b);

console.log(name);

console.log(data);


