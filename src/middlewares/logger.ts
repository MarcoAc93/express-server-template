import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, _res: Response, next: NextFunction) => {
  console.info(`[${req.method}]: ${req.url}`);
  next();
};

export default logger;
