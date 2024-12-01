import http from "http";

const PORT =process.argv[2]|| 3000;

const requestHandler = (req: http.IncomingMessage, res: http.ServerResponse) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello, I am TypeScript with Node.js!");
};

const server = http.createServer(requestHandler);

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
});
