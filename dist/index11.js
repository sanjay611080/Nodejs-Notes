const express = require('express');
const app = express();
const port = 3000;

// Built-in middleware for parsing JSON bodies
app.use(express.json());

// Third-party middleware (Install using npm install morgan)
const morgan = require('morgan');
app.use(morgan('dev'));

// Application-level middleware
app.use((req, res, next) => {
  console.log('Application-level middleware called');
  // ------------------------------------------------------------------------------------------------
  // res.redirect('/404'); 
  // next();
});

// Router-level middleware
const router = express.Router();
router.use((req, res, next) => {
  console.log('Router-level middleware called');
  next();
});

// Route that uses the router-level middleware
router.get('/router-example', (req, res) => {
  res.send('Router-level middleware example');
});
app.use('/', router);
// ------------------------------------------------------------------------------------------------
app.get('/404', (req, res) => {
  res.status(404).send('Sorry, the page you are looking for does not exist.');
});

app.use((req, res, next) => {
  res.redirect('/404'); // Redirect to custom 404 page
}); 

// Error-handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  // ------------------------------------------------------------------------------------------------
  // res.redirect('/404'); 
  res.status(500).send('Something broke!');
});

// A route that triggers an error
app.get('/error', (req, res) => {
  throw new Error('Broke!');
});

// A simple route
app.get('/users', (req, res) => {
  res.send('Users!');
});

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});