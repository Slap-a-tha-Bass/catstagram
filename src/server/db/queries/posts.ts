import { Query } from "..";
import { Posts } from "../../types";

// * find_user query @ passport-strategies.ts

const get_posts = () =>
  Query<Posts[]>(
    "SELECT posts.*, catstagram.users.username, catstagram.users.first_name, catstagram.users.last_name FROM catstagram.posts JOIN catstagram.users ON users.id = catstagram.posts.user_id ORDER BY _created DESC"
  );
const get_one_post = (id: string) =>
  Query(
    `SELECT posts.*, catstagram.users.username, catstagram.users.first_name, catstagram.users.last_name FROM catstagram.posts JOIN catstagram.users ON users.id = catstagram.posts.user_id WHERE catstagram.posts.id = '${id}'`
  );
const create_post = (newPost: Posts) =>
  Query(`INSERT INTO catstagram.posts SET ?`, [newPost]);

export default {
  get_posts,
  get_one_post,
  create_post,
};
