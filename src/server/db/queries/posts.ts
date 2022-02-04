import { Query } from "..";
import { Posts } from "../../types";

// * find_user query @ passport-strategies.ts

const get_posts = () => Query<Posts[]>("SELECT * FROM catstagram.posts");

const create_post = (newPost: Posts) =>
  Query(`INSERT INTO catstagram.posts SET ?`, [newPost]);

export default {
  get_posts,
  create_post,
};
