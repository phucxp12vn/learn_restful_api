import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import httpStatus from 'http-status-codes';

import { jwtSecret } from '@/config/vars';

const token = (username: string) => {
  const payload = {
    exp: moment().add(15, 'minutes').unix(),
    iat: moment().unix(),
    username,
  };
  return jwt.sign(payload, jwtSecret);
};

export const login = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const { username, password } = req.body;

    if (username === 'admin' && password === 'admin') {
      const accessToken = token(username);
      res.json({ token: accessToken });
    } else {
      res.status(httpStatus.UNAUTHORIZED).json({ message: 'Invalid username or password!' });
    }
  } catch (error) {
    next(error);
  }
};
