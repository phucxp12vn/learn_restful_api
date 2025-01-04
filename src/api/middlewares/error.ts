import { Request, Response, NextFunction } from 'express';
import { env } from '@/config/vars';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const handler = (err: any, _req: Request, res: Response, _next: NextFunction) => {
  const response = {
    message: err.message,
    errors: err.errors,
    stack: err.stack,
  };

  if (env !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};
