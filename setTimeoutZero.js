console.log("Hello world!!!");

let a = 2345;
let b = 87655678;

setTimeout(() => {
    console.log("Call me ASAP");
}, 0);

setTimeout(() => {
    console.log("Call me after 3 seconds");
}, 3000);

function multiply(a, b) {
    return a * b;
}

let c = multiply(a, b);

console.log("Result of multiplication is : ", c);
