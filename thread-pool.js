process.env.UV_THREADPOOL_SIZE=1;

const crypto = require('node:crypto');

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (res) => {
    console.log("First Key generated successfully");
})

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (res) => {
    console.log("Second Key generated successfully");
})

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (res) => {
    console.log("Third Key generated successfully");
})

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (res) => {
    console.log("Fourth Key generated successfully");
})

crypto.pbkdf2('password', 'salt', 5000000, 50, 'sha512', (res) => {
    console.log("Fifth Key generated successfully");
})