const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req: { url: any; }, res: { end: (arg0: string) => void; }) => {
  const Url = req.url;

  if (Url === '/' || Url === '/home') {
    
    const filePath = path.join(__dirname, 'project', 'index.html');

    fs.readFile(filePath, (err: any, data: string) => {
      if (err) {
        res.end('Internal Server Error');
        return;
      }

      res.end(data);
    });
  } else {
 
    res.end('Page not found');
  }
});

server.listen(3000, () => {
  console.log('Server is running at port 3000');
});
