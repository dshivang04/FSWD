<<<<<<< HEAD
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});

server.listen(5500,'localhost',() => {
    console.log('Server is listening on port http://localhost:5500/');
});
=======
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});

server.listen(5500,'localhost',() => {
    console.log('Server is listening on port http://localhost:5500/');
});
>>>>>>> bb54b8fda2c81d2db87af37fa0e097465b310460
