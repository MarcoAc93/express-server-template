const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.status(200);
  return 'Hello world';
});

module.exports = app;
