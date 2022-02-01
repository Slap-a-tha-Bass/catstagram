import { Query } from "..";
import { Users } from "../../types";

const get_users = () => Query<Users[]>("SELECT * FROM catstagram.users");

const create_user = ({
  first_name,
  last_name,
  username,
  email,
  password,
}: Users) =>
  Query(
    `INSERT INTO catstagram.users VALUES('2', 'Bob', 'McKenna', 'Bobalicious', 'test2@test.com', 'password123')`
  );

export default {
  get_users,
  create_user,
};
// ${first_name}, ${last_name}, ${username}, ${email}, ${password}