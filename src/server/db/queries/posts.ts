import { Query, QueryRows } from "..";
import { Posts } from "../../types";

// * find_user query @ passport-strategies.ts

const get_posts = () =>
  Query<Posts[]>(
    "SELECT posts.*, public.users.username, public.users.first_name, public.users.last_name FROM public.posts JOIN public.users ON users.id = public.posts.user_id ORDER BY _created DESC"
  );
  const get_comments_per_post = () =>
  Query<Posts[]>(
      `
      SELECT 
        posts.*,
        COUNT(comments.id) as num_of_comments
      FROM public.posts 
        JOIN public.users ON users.id = public.posts.user_id
        LEFT JOIN public.comments 
          ON public.comments.post_id = public.posts.id
      GROUP BY public.posts.id
      ORDER BY _created DESC
      `
  );
const get_one_post = (id: string) =>
  Query(
    `SELECT posts.*, public.users.username, public.users.first_name, public.users.last_name FROM public.posts JOIN public.users ON users.id = public.posts.user_id WHERE public.posts.id = '${id}'`
  );
const posts_by_user = (user_id: string) =>
  Query(`SELECT * FROM public.posts WHERE user_id = '${user_id}'`);
const create_post = (newPost: Posts) =>
  Query(`INSERT INTO public.posts SET ?`, [newPost]);
const update = (
  caption: string,
  user_id: string,
  postid: string,
  img_url: string
) =>
  Query(
    `UPDATE public.posts SET caption = '${caption}', img_url = '${img_url}' WHERE id = '${postid}' AND user_id = '${user_id}'`
  );
const destroy = (postid: string, user_id: string) =>
  Query(
    `DELETE FROM public.posts WHERE id = '${postid}' AND user_id = '${user_id}'`
  );
const search = (searchTerm: string) =>
  Query(
    `SELECT posts.*, public.users.username, public.users.first_name, public.users.last_name FROM public.posts JOIN public.users ON users.id = public.posts.user_id WHERE users.username LIKE '${searchTerm}%'`
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
