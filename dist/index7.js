"use strict";
const http = require('http');
const { parse } = require('querystring');
// Create an HTTP server
const server = http.createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/submit') {
        let body = '';
        // Collect data
        req.on('data', chunk => {
            body += chunk.toString();
        });
        // Process data
        req.on('end', () => {
            const parsedData = parse(body);
            console.log('Received data:', parsedData);
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ message: 'Data received', data: parsedData }));
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
// Start the server
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
