import * as dotenv from "dotenv";

dotenv.config();

export const pgConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
};
