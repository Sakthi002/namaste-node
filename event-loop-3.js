const fs = require('fs');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => {
    console.log('Timer expired')
}, 0);

Promise.resolve("Promise").then(console.log);

fs.readFile('./file.txt', 'utf-8', () => {

    setTimeout(() => console.log('2nd timer expired'), 0);

    process.nextTick(() => console.log("2nd process.nextTick"));

    setImmediate(() => console.log('2nd setImmediate'));

    console.log("File read IO");
    
});

process.nextTick(() => console.log("process.nextTick"));

console.log("Last line of a file");

// Last line of a file
// process.nextTick
// Promise
// Timer expired
// setImmediate
// File read IO
// 2nd process.nextTick
// 2nd setImmediate
// 2nd timer expired
