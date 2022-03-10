import { Query } from "..";
import { IComments, Users } from "../../types";

const post_comments = (post_id: string) =>
  Query<IComments & Users[]>(
    `SELECT comments.*, users.username FROM d7bmgcr0q3uku1.comments
        JOIN d7bmgcr0q3uku1.users ON d7bmgcr0q3uku1.users.id = d7bmgcr0q3uku1.comments.user_id 
        WHERE d7bmgcr0q3uku1.comments.post_id = '${post_id}' ORDER BY _created ASC`
  );
const insert_comment = (newComment: IComments) =>
  Query(`INSERT INTO d7bmgcr0q3uku1.comments SET ?`, [newComment]);

export default {
  post_comments,
  insert_comment,
};
