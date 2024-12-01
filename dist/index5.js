"use strict";
const http = require("http");
const fs = require("fs");
const msg = fs.readFileSync("./msg.txt", "utf-8");
const server = http.createServer((req, res) => {
    console.log(req.header);
    res.end(msg);
});
server.listen(3000, () => {
    console.log("Server is running at 3000");
});
