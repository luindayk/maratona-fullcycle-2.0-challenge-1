const http = require('http');

const PORT = 3000;
const HOST = '0.0.0.0';

const server = http.createServer((req, res) => {
    res.end('<h1>Maratona Full Cycle 2.0</h1>');
});

server.listen(PORT, HOST);