import { Request, Response, NextFunction } from 'express';

import { env } from '@/config/vars';
import { ApiError } from '@/api/types/error';

import httpStatus from 'http-status-codes';

export const handler = (err: ApiError, _req: Request, res: Response, _next: NextFunction) => {
  const response = {
    status: err.status,
    error: httpStatus.getStatusText(err.status),
    message: err.message,
    details: err.details,
    stack: err.stack,
  };

  if (env !== 'development') {
    delete response.stack;
  }

  res.status(err.status);
  res.json(response);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const converter = (err: any, req: Request, res: Response, next: NextFunction) => {
  let convertedError = err;

  if (!(err instanceof ApiError)) {
    convertedError = new ApiError({
      message: err.message,
      status: err.statusCode,
      stack: err.stack,
    });
  }

  return handler(convertedError, req, res, next);
};
