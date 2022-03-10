import { Query } from "..";
import { IComments, Users } from "../../types";

const post_comments = (post_id: string) =>
  Query<IComments & Users[]>(
    `SELECT comments.*, users.username FROM public.comments
        JOIN public.users ON public.users.id = public.comments.user_id 
        WHERE public.comments.post_id = '${post_id}' ORDER BY _created ASC`
  );
const insert_comment = (newComment: IComments) =>
  Query(`INSERT INTO public.comments SET ?`, [newComment]);

export default {
  post_comments,
  insert_comment,
};
