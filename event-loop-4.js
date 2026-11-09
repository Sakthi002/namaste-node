const fs = require('fs');

setImmediate(() => console.log('setImmediate'));

setTimeout(() => console.log('Timer expired'), 0);

Promise.resolve('Promise').then(console.log);

fs.readFile('./file.txt', 'utf-8', () => {
    console.log('File reading IO');
})

process.nextTick(() => {
    // process.nextTick(()=> console.log('inner nextTick'));
    setImmediate(() => console.log('2nd setImmediate'));
    console.log('nextTick')
})

console.log("Last line of the file");


// OUTPUT
// Last line of the file
// nextTick
// Promise
// Timer expired
// setImmediate
// 2nd setImmediate
// File reading IO