<<<<<<< HEAD
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    if (req.method === 'PUT') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!');
    } else {
      res.statusCode = 405; // Method Not Allowed
      res.setHeader('Allow', 'PUT');
      res.end();
    }
  } else if (req.url === '/json') {
    if (req.method === 'PUT') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const json = JSON.stringify({ message: 'Hello, World!' });
      res.end(json);
    } else {
      res.statusCode = 405;
      res.setHeader('Allow', 'PUT');
      res.end();
    }
  } else {
    res.statusCode = 404; // Not Found
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/json`);
=======
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    if (req.method === 'PUT') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello, World!');
    } else {
      res.statusCode = 405; // Method Not Allowed
      res.setHeader('Allow', 'PUT');
      res.end();
    }
  } else if (req.url === '/json') {
    if (req.method === 'PUT') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      const json = JSON.stringify({ message: 'Hello, World!' });
      res.end(json);
    } else {
      res.statusCode = 405;
      res.setHeader('Allow', 'PUT');
      res.end();
    }
  } else {
    res.statusCode = 404; // Not Found
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/json`);
>>>>>>> bb54b8fda2c81d2db87af37fa0e097465b310460
});