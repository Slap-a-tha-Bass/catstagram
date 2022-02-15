import { Query } from "..";
import { IComments, Users } from "../../types";

const post_comments = (post_id: string) =>
  Query<IComments & Users[]>(
    `SELECT comments.*, users.username FROM catstagram.comments 
        JOIN catstagram.users ON catstagram.users.id = catstagram.comments.user_id 
        WHERE catstagram.comments.id = '${post_id}'`
  );
const insert_comment = (newComment: IComments) =>
  Query(`INSERT INTO catstagram.comments SET ?`, [newComment]);

export default {
  post_comments,
  insert_comment,
};
