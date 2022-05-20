const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8000;

const cors = require('./middlewares/cors');
const logger = require('./middlewares/logger');

const healthCheck = require('./router/health-check.route');
const greetings = require('./router/greetings.route');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);
app.use(logger);

// Health Check
app.use(healthCheck);

// Routes
app.use('/api', greetings);

app.listen((error) => {
  if (error) console.error(error);
  console.info(`Server listening on ${port}`);
});
