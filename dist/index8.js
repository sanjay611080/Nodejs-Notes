const express = require('express');
const app = express();

app.use(express.json());

// app.post('/api/data', (req, res) => {
//     const data = req.body;
//     console.log('Data:', data);
//     res.status(200).json({ message: 'Data received', data });
// });


app.post('/api/data', express.json(), (req, res) => {
    const data = req.body;
    console.log('Data:', data);
    res.status(200).json({ message: 'Data received', data });
});

app.listen(3000, () => {
    console.log(`Server is running at 3000`);
});

