// Creating a server using nodejs 
const http = require("http");

const server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'text/plain' }); //res.writeHead is used to set the HTTP status code and headers before sending the response
    res.end("hello")
})

server.listen(3000, ()=>{
    console.log("server is running at http://localhost:3000/");
})

