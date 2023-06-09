import { config } from 'dotenv';
config({ path: `.env.${process.env.NODE_ENV || 'development'}.local` });

export const CREDENTIALS = process.env.CREDENTIALS === 'true';
export const { NODE_ENV, PORT, DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_DATABASE,DB_SQLITEPATH, SECRET_KEY, LOG_FORMAT, LOG_DIR, ORIGIN } = process.env;
export const {GAPIS_API_KEY,GAPIS_EMAIL_ID,GAPIS_PRIVATE_KEY,GAPIS_PERMISSIONS,BLOGS_FOLDER_ID} = process.env;
