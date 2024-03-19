import { config } from 'dotenv';
config({ path: '.env' });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const {
  NODE_ENV,
  LOG_FORMAT,
  LOG_DIR,
  PORT,
  HOST_NAME,
  MONGO_URI,
  DBNAME,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
} = process.env;
