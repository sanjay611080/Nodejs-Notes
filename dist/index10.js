
const express = require('express');
const app = express();
const port = 3000;

// Global middleware defined using app.use() 


// Route-specific middleware for GET requests to /example
app.get('/example', (req, res, next) => {
  req.routeData = 'Route Data'; // Modify the request object specific to this route
  console.log('GET /example Middleware: Modified request with route data');
  next(); // Pass control to the route handler
}, (req, res) => {
  // Route handler for GET /example
  res.send(`Request Data - Global: ${req.globalData}, Route: ${req.routeData}`);
});
app.use((req, res, next) => {
    req.globalData = 'Global Data'; // Modify the request object
    console.log('Global Middleware: Modified request with global data');
    next(); // Pass control to the next middleware or route handler
  });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
