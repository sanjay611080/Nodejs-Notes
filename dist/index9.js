
const express = require('express');
const app = express();
const port = 3000;

// Route handler for /example
app.use((req, res, next) => {
  console.log('Global Middleware');
  next(); // Pass control to the next middleware or route handler
});
app.get('/example', (req, res) => {
  res.send('Route handler for /example');
}); 
// Global middleware defined after route handlers


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

