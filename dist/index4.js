"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const PORT = process.argv[2] || 3000;
const requestHandler = (req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Hello, I am TypeScript with Node.js!");
};
const server = http_1.default.createServer(requestHandler);
server.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}/`);
});
