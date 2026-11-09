const crypto = require('node:crypto');

console.log("Hello World!");

let key = crypto.pbkdf2Sync('password', 'salt', 5000000, 50, 'sha512');

console.log("First Key generated successfully");

setTimeout(() => {
    console.log("Call me ASAP");
}, 0);

crypto.pbkdf2('password', 'salt', 500000, 50, 'sha512', (res) => {
    console.log("Second Key generated successfully");
})

let a = 10;
let b = 20;

function multiply(x, y) {

    return x * y; 
}

let c = multiply(a, b);

console.log("Result of Multiply is : ", c);