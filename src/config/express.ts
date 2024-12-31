import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import routes from '@/api/routes/v1';
import * as error from '@/api/middlewares/error'; // Assuming error is exported as default
import { logs } from './vars';
import { stream } from '@/config/logger';

const app = express();

app.use(morgan(logs, { stream }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/v1', routes);

app.use(error.handler);

export default app;
