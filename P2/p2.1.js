const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, world!');
});

server.listen(5500,'localhost',() => {
    console.log('Server is listening on port http://localhost:5500/');
});
