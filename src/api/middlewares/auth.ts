import { NextFunction, Request, Response } from 'express';
import passport from 'passport';

export const authenticateJWT = (req: Request, res: Response, next: NextFunction) => {
  passport.authenticate(
    'jwt',
    { session: false },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function (err: Error | null, user: any, info: any) {
      const error = err || info;
      const message = error ? error.message : 'Unauthorized';
      const status = 401;
      const stack = error ? error.stack : undefined;

      if (error || !user) {
        return next({ status, message, stack });
      }

      return next();
    },
  )(req, res, next);
};
