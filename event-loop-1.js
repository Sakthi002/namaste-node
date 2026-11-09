const fs = require('fs');
let a = 100;

setImmediate(() => {
    console.log("setImmediate");
});

fs.readFile('./file.txt', 'utf-8', () => {
    console.log("File reading IO");
})

setTimeout(() => console.log("Timer Expired"));

function printA() {
    console.log("a=",a);
}

printA();
console.log("Last line of a code");

// OUTPUT
// a=100;
// Last line of a code
// Timer Expired
// setImmedite
// File reading IO 
