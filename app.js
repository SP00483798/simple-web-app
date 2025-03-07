const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a simple Node.js web Docker hello . /n My First App');
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', uptime: process.uptime() });
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
