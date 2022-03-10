import { Query, QueryRows } from "..";
import { Posts } from "../../types";

// * find_user query @ passport-strategies.ts

const get_posts = () =>
  Query<Posts[]>(
    "SELECT posts.*, d7bmgcr0q3uku1.users.username, d7bmgcr0q3uku1.users.first_name, d7bmgcr0q3uku1.users.last_name FROM d7bmgcr0q3uku1.posts JOIN d7bmgcr0q3uku1.users ON users.id = d7bmgcr0q3uku1.posts.user_id ORDER BY _created DESC"
  );
  const get_comments_per_post = () =>
  Query<Posts[]>(
      `
      SELECT 
        posts.*,
        COUNT(comments.id) as num_of_comments
      FROM d7bmgcr0q3uku1.posts 
        JOIN d7bmgcr0q3uku1.users ON users.id = d7bmgcr0q3uku1.posts.user_id
        LEFT JOIN d7bmgcr0q3uku1.comments 
          ON d7bmgcr0q3uku1.comments.post_id = d7bmgcr0q3uku1.posts.id
      GROUP BY d7bmgcr0q3uku1.posts.id
      ORDER BY _created DESC
      `
  );
const get_one_post = (id: string) =>
  Query(
    `SELECT posts.*, d7bmgcr0q3uku1.users.username, d7bmgcr0q3uku1.users.first_name, d7bmgcr0q3uku1.users.last_name FROM d7bmgcr0q3uku1.posts JOIN d7bmgcr0q3uku1.users ON users.id = d7bmgcr0q3uku1.posts.user_id WHERE d7bmgcr0q3uku1.posts.id = '${id}'`
  );
const posts_by_user = (user_id: string) =>
  Query(`SELECT * FROM d7bmgcr0q3uku1.posts WHERE user_id = '${user_id}'`);
const create_post = (newPost: Posts) =>
  Query(`INSERT INTO d7bmgcr0q3uku1.posts SET ?`, [newPost]);
const update = (
  caption: string,
  user_id: string,
  postid: string,
  img_url: string
) =>
  Query(
    `UPDATE d7bmgcr0q3uku1.posts SET caption = '${caption}', img_url = '${img_url}' WHERE id = '${postid}' AND user_id = '${user_id}'`
  );
const destroy = (postid: string, user_id: string) =>
  Query(
    `DELETE FROM d7bmgcr0q3uku1.posts WHERE id = '${postid}' AND user_id = '${user_id}'`
  );
const search = (searchTerm: string) =>
  Query(
    `SELECT posts.*, d7bmgcr0q3uku1.users.username, d7bmgcr0q3uku1.users.first_name, d7bmgcr0q3uku1.users.last_name FROM catstagram.posts JOIN catstagram.users ON users.id = catstagram.posts.user_id WHERE users.username LIKE '${searchTerm}%'`
  );

export default {
  get_posts,
  get_one_post,
  create_post,
  posts_by_user,
  update,
  destroy,
  search,
  get_comments_per_post
};
