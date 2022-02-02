import { Query } from "..";
import { Users } from "../../types";

const get_users = () => Query<Users[]>("SELECT * FROM catstagram.users");

const create_user = (newUser: Users) =>
  Query(`INSERT INTO catstagram.users SET ?`, [newUser]);

export default {
  get_users,
  create_user,
};

