import * as pg from "pg";
import { Pool } from "pg";
import { pgConfig } from "../config";
import { pgResponse } from "../types";

const pool = new Pool(pgConfig);

export const Query = <T = pgResponse>(queryString: string, values?: any) => {
  let text = queryString;
  if (queryString.toUpperCase().includes("SET ?")) {
    const prop_names = `${Object.keys(values[0]).join(", ")}`;
    const placeholders = `${Object.keys(values[0])
      .map((z, i) => `$${i + 1}`)
      .join(", ")}`;

    const SET_index = queryString.indexOf("SET ?");
    const pre_sql = queryString.substring(0, SET_index - 1);

    text = `${pre_sql} (${prop_names}) VALUES (${placeholders})`;
    values = Object.values(values[0]);
    console.log({ text, values });
  }
  return new Promise<T>((resolve, reject) => {
    pool.query(text, values, (error, results: any) => {
      if (error) {
        reject(error);
      } else {
        resolve(results);
      }
    });
  });
};
