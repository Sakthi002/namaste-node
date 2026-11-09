const fs = require('fs');
const https = require('https');

let a = 100;
let b = 200;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("Data fetched successfully!");
})

setTimeout(() => {
    console.log("Set Timeout called after 5 seconds");
}, 5000);

fs.readFile('./file.txt', 'utf-8', (err, data) => {
    console.log("File fetched successfully!");
});

function multiply(a,b) {
    return a * b;
}

let result = multiply(a,b);

console.log("Multiplication result is : ", result);
