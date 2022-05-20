import express from 'express';
const router = express();

import sendGreetings from '../controllers/greetings.controller';

router.get('/greetings', sendGreetings);

export default router;
