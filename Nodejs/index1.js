// creating http endpoints using nodejs 

const http = require("http");

const server = http.createServer((req, res)=>{

    const {method , url} = req;
    if(url === '/' && method === 'GET'){
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end("Welcome to Home Page");
    }else if (url === "/data" && method === "POST") {
        // Example of handling POST requests
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); 
        });
        req.on('end', () => {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(`Received data: ${body}`);
        });
    }else {
        // Handle unknown routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end("Page not found");
    }
})

server.listen(3000, () => {
    console.log("Server is running at http://localhost:3000/");
});