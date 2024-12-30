import express from 'express';
import cors from 'cors';

import routes from '@/api/routes/v1';
import * as error from '@/api/middlewares/error'; // Assuming error is exported as default

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/v1', routes);

app.use(error.handler);

export default app;
