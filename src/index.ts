import app from '@/config/express';
import { port, env } from '@/config/vars';
import logger from '@/config/logger';

app.listen(port, () => logger.info(`server started on port ${port} (${env})`));
