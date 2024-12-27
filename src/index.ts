import app from '@/config/express';
import { port, env } from '@/config/vars';

app.listen(port, () => console.log(`server started on port ${port} (${env})`));
