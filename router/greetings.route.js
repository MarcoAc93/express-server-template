const express = require('express');
const router = express();

const sendGreetings = require('../controllers/greetings.controller');

router.get('/greetings', sendGreetings);

module.exports = router;
