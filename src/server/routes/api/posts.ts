import { Router } from "express";
import db from "../../db/queries/posts";
import * as passport from "passport";
import { v4 as uuidv4 } from "uuid";

import { Posts, ReqUser } from "../../types";

const router = Router();

// * router for searching user

router.get("/search", async (req, res, next) => {
  const { searchTerm } = req.query;
  try {
    const posts = await db.search(searchTerm.toString().toLowerCase());
    res.json(posts.rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in posts.ts", error: error.message });
  }
});
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
router.put(
  "/edit/:postid",
  passport.authenticate("jwt"),
  async (req: ReqUser, res, next) => {
    const { postid } = req.params;
    const { user_id } = req.user;
    const { img_url, caption } = req.body;
    try {
      const editedPost = await db.update(caption, user_id, postid, img_url);
      res.json({ message: "Edited post!", id: postid, editedPost });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in posts.ts > put", error: error.message });
    }
  }
);
router.delete(
  "/:postid",
  passport.authenticate("jwt"),
  async (req: ReqUser, res, next) => {
    const { postid } = req.params;
    const { user_id } = req.user;
    try {
      const deleted_post = await db.destroy(postid, user_id);
      if (deleted_post.rowCount === 1) {
        res.json({ message: "Post successfully deleted!", ...deleted_post });
      } else {
        res.status(401).json({ message: "Unauthorized user." });
      }
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in posts.ts", error: error.message });
    }
  }
);
export default router;
