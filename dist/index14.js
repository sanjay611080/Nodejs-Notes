const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Middleware to parse JSON bodies

// In-memory data store
let items = [{ id: 1, name: 'Item 1' }];

// Utility function to find item index
const findItemIndex = (id) => items.findIndex(item => item.id === parseInt(id));

// CREATE: Add a new item
app.post('/items', (req, res) => {
  const { name } = req.body;
  const id = items.length + 1;
  items.push({ id, name });
  res.status(201).send({ id, name });
});

// READ: Get all items
app.get('/items', (req, res) => {
  res.send(items);
});

// READ: Get a single item by id
app.get('/items/:id', (req, res) => {
  const index = findItemIndex(req.params.id);
  if (index === -1) return res.status(404).send('Item not found');
  res.send(items[index]);
});

// UPDATE: Update an item by id
app.put('/items/:id', (req, res) => {
  const index = findItemIndex(req.params.id);
  if (index === -1) return res.status(404).send('Item not found');

  items[index].name = req.body.name;
  res.send(items[index]);
});

// DELETE: Delete an item by id
app.delete('/items/:id', (req, res) => {
  const index = findItemIndex(req.params.id);
  if (index === -1) return res.status(404).send('Item not found');

  items = items.filter(item => item.id !== parseInt(req.params.id));
  res.status(204).send();
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});