import express from 'express';
const router = express();

import healthCheck from '../controllers/health-check.controller';

router.get('/', healthCheck);

export default router;
