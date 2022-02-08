import { Query, QueryRows } from "..";
import { Users } from "../../types";

// * find_user query @ passport-strategies.ts

const get_users = () => Query<Users[]>("SELECT * FROM catstagram.users");
const get_one_user = (user_id: string) =>
  QueryRows<Users[]>(`SELECT * FROM catstagram.users WHERE id = '${user_id}'`);
const find_user = (userEmail: string) =>
  QueryRows<Users[]>(
    `SELECT * FROM catstagram.users WHERE email = '${userEmail}'`
  );

const create_user = (newUser: Users) =>
  Query(`INSERT INTO catstagram.users SET ?`, [newUser]);

export default {
  get_users,
  get_one_user,
  create_user,
  find_user,
};
