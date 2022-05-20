import { Request, Response } from 'express';

const sendGreetings = (_req: Request, res: Response) => {
  res.status(200);
  return 'Hello human';
};

export default sendGreetings;
