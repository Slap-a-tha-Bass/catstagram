import * as pg from 'pg';
import { Pool } from "pg";
import { pgConfig } from "../config";
import { pgResponse } from "../types";

const pool = new Pool(pgConfig);

export const Query= <T = pgResponse>(queryString: string, values?: any) => {
  return new Promise <T>((resolve, reject) => {
    pool.query(queryString, values, (error, results: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
