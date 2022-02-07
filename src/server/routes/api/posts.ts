import { Router } from "express";
import db from "../../db/queries/posts";
import * as passport from "passport";
import { v4 as uuidv4 } from "uuid";

import { Posts, ReqUser } from "../../types";

const router = Router();

// * router for current user

router.get("/:postid", async (req, res, next) => {
  try {
    const postid = req.params.postid;
    const post = await db.get_one_post(postid);
    res.json(post);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in posts.ts", error: error.message });
  }
});

router.get("/", async (req, res, next) => {
  try {
    const posts = await db.get_posts();
    res.json(posts);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in posts.ts", error: error.message });
  }
});
router.post(
  "/",
  passport.authenticate("jwt"),
  async (req: ReqUser, res, next) => {
    const { img_url, caption } = req.body;
    try {
      const id = uuidv4();
      const newPost: Posts = {
        id,
        user_id: req.user.user_id,
        img_url,
        caption,
      };
      await db.create_post(newPost);
      res.json({ message: "New post created!", id: id });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in posts.ts", error: error.message });
    }
  }
);
export default router;
