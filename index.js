const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

const greetings = require('./controllers/greetings');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(greetings);

app.listen(port, () => console.log(`Server listening on port ${port}`));
