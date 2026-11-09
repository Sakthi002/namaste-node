// console.log('A');
// setTimeout(() => console.log('B'), 0);
// Promise.resolve().then(() => console.log('C'));
// process.nextTick(() => console.log('D'));
// console.log('E');

// Output
// A
// E
// D
// C
// B

// process.nextTick(() => console.log('N1'));
// Promise.resolve().then(() => console.log('P1'));
// process.nextTick(() => console.log('N2'));
// Promise.resolve().then(() => console.log('P2'));

// OUTPUT
// N1
// N2
// P1
// P2

// process.nextTick(() => {
//   console.log('N1');
//   process.nextTick(() => console.log('N3'));
// });
// process.nextTick(() => console.log('N2'));
// Promise.resolve().then(() => console.log('P1'));

// OUTPUT
// N1
// N2
// N3
// P1

// Promise.resolve().then(() => console.log('P1')).then(() => console.log('P2'));
// Promise.resolve().then(() => console.log('P3'));
// process.nextTick(() => console.log('N1'));

// OUTPUT
// N1
// P1
// P3
// P2

// Promise.resolve().then(() => {
//   console.log('P1');
//   process.nextTick(() => console.log('N2'));
// });
// process.nextTick(() => {
//   console.log('N1');
//   Promise.resolve().then(() => console.log('P2'));
// });

// OUTPUT
// N1
// P1
// P2
// N2

// async function foo() {
//   console.log('foo start');
//   await null;
//   console.log('foo end');
// }
// console.log('script start');
// foo();
// Promise.resolve().then(() => console.log('promise'));
// process.nextTick(() => console.log('tick'));
// console.log('script end');

// Output
// script start
// foo start
// script end
// tick
// foo end
// promise

// setTimeout(() => {
//   console.log('T1');
//   Promise.resolve().then(() => console.log('P1'));
// }, 0);
// setTimeout(() => {
//   console.log('T2');
//   process.nextTick(() => console.log('N2'));
// }, 0);

// OUTPUT
// T1
// P1
// T2
// N2

// setImmediate(() => {
//   console.log('I1');
//   process.nextTick(() => console.log('N1'));
//   setImmediate(() => console.log('I3'));
// });
// setImmediate(() => console.log('I2'));

// OUTPUT
// I1
// N1
// I2
// I3

// setTimeout(() => console.log('100ms'), 100);
// setTimeout(() => console.log('0ms'), 0);

// const start = Date.now();
// while (Date.now() - start < 200) {}  // blocks for 200ms

// console.log('loop done');

// OUTPUT
// loop done
// 0ms
// 100ms

// const fs = require('fs');

// console.log('1');

// fs.readFile(__filename, () => {
//   console.log('2');
//   setTimeout(() => console.log('3'), 0);
//   setImmediate(() => {
//     console.log('4');
//     process.nextTick(() => console.log('5'));
//   });
//   Promise.resolve().then(() => console.log('6'));
// });

// process.nextTick(() => console.log('7'));
// Promise.resolve().then(() => console.log('8'));
// console.log('9');

// OUTPUT
// 1
// 9
// 7
// 8
// 2
// 6
// 4
// 5
// 3