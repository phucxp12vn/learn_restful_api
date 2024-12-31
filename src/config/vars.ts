import dotenvSafe from 'dotenv-safe';
import path from 'path';

dotenvSafe.config({
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example'),
});

export const env = process.env.NODE_ENV || 'development';
export const port = process.env.PORT || 3000;
export const logs = process.env.NODE_ENV === 'production' ? 'combined' : 'dev';