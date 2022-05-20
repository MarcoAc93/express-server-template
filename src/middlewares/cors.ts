import { Request, Response, NextFunction } from 'express';

const HOSTS = ['http://localhost:3000'];

const cors = (_req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', ...HOSTS);
  res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
};

export default cors;
