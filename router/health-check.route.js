const express = require('express');
const router = express();

const healthCheck = require('../controllers/health-check.controller');

router.get('/', healthCheck);

module.exports = router;
