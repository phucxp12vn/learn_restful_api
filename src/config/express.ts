import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import passport from 'passport';

import routes from '@/api/routes/v1';
import * as error from '@/api/middlewares/error'; // Assuming error is exported as default
import { stream } from '@/config/logger';
import * as strategies from '@/config/passport';
import { logs } from './vars';

const app = express();

app.use(morgan(logs, { stream }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(passport.initialize());
passport.use('jwt', strategies.jwt);

app.use('/v1', routes);

app.use(error.converter);

app.use(error.handler);

export default app;
