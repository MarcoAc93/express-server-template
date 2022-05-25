import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 8000;

import cors from './middlewares/cors';
import logger from './middlewares/logger';

import healthCheck from './router/health-check.route';
import greetings from './router/greetings.route';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors);
app.use(logger);

// Health Check
app.use(healthCheck);

// Routes
app.use('/api', greetings);

app.listen(port, () => {
  console.log(`Server running on por ${port}`);
});
