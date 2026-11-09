const fs = require('fs');

const a = 1000;

setImmediate(() => console.log('setImmediate : calls after current code, nextTick, promises, timer and poll phase callback executed'));

setTimeout(() => console.log('Timer Expired! : calls after current code, nextTick and promises callback executed'), 0);

process.nextTick(() => console.log('nextTick : calls after current code completes'));

Promise.resolve().then(() => console.log('Promise: : calls after current code and nextTick callback executed'));

fs.readFile('./file.txt', 'utf-8', () => {
    console.log('File reading IO : : calls after current code, nextTick, promises and timer phase callback executed');
});

function printA() {
    console.log("a = ", a);
}

printA();

console.log("End of the code");

// OUTPUT
// a = 1000;
// End of the code
// nextTick : calls after current code completes
// Promise: : calls after current code and nextTick callback executed
// Timer Expired! : calls after current code, nextTick and promises callback executed
// setImmediate : calls after current code, nextTick, promises, timer and poll phase callback executed
// File reading IO : : calls after current code, nextTick, promises and timer phase callback executed

