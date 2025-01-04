import passportJwt from 'passport-jwt';
import { ExtractJwt, VerifiedCallback } from 'passport-jwt';

import { jwtSecret } from './vars';

const JwtStrategy = passportJwt.Strategy;

const jwtOptions = {
  secretOrKey: jwtSecret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const jwtHandler = (jwtToken: any, done: VerifiedCallback) => {
  try {
    console.log('jwtToken', jwtToken);
    const user = jwtToken?.username === 'admin' ? { id: 1, username: 'admin' } : null; //fixme
    if (user) return done(null, user);

    return done(null, false);
  } catch (error) {
    return done(error, false);
  }
};

export const jwt = new JwtStrategy(jwtOptions, jwtHandler);
