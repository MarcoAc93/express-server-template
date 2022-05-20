import { Request, Response } from "express";

const healthCheck = (_req: Request, res: Response) => {
  res.status(200);
  res.send('ok');
};

export default healthCheck;
