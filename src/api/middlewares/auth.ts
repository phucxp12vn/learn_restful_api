import { NextFunction, Request, Response } from 'express';
import passport, { LogInOptions } from 'passport';
import httpStatus from 'http-status-codes';
import { promisify } from 'util';
import { AuthorizeCallback } from 'passport';

import { ApiError } from '../types/error';

const handleJWT =
  (req: Request, _res: Response, next: NextFunction): AuthorizeCallback =>
  async (err, user, info) => {
    const error = err || info;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const logIn = promisify<any, LogInOptions>(req.logIn);

    const apiError = new ApiError({
      message: error ? error.message : 'Unauthorized',
      status: httpStatus.UNAUTHORIZED,
      stack: error ? error.stack : undefined,
    });

    try {
      if (error || !user) throw error;
      await logIn(user, { session: false });
    } catch (_e: unknown) {
      return next(apiError);
    }

    req.user = user;

    return next();
  };

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate('jwt', { session: false }, handleJWT(req, res, next))(req, res, next);
};
