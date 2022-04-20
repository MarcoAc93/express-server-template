const express = require('express');
const app = express();

app.get('/greetings', (req, res) => {
  res.status(200);
  return 'Hello world';
});

module.exports = app;
