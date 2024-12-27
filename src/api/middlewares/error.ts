import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

export const converter = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof ValidationError) {
    res.status((err as ValidationError).statusCode).json(err); //fixme
  }

  res.status(500).json(err);
};
