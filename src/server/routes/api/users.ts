import { Router } from "express";
import * as passport from "passport";
import { ReqUser } from "../../types";
import db from "../../db/queries/users";
import db_post from "../../db/queries/posts";

const router = Router();

// * router for current user

router.get(
  "/profile",
  passport.authenticate("jwt"),
  async (req: ReqUser, res, next) => {
    try {
      const user_id = req.user.user_id;
      const [profile] = await db.get_one_user(user_id);
      delete profile.password;
      const posts = await db_post.posts_by_user(user_id);
      res.json({ profile, posts: posts.rows });
    } catch (error) {
      console.log(error);
    }
  }
);

export default router;
