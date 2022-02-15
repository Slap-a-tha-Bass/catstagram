import { Router } from "express";
import * as passport from "passport";
import db from "../../db/queries/comments";
import { v4 as uuidv4 } from "uuid";
import { IComments, ReqUser } from "../../types";

const router = Router();

router.get("/", async (req, res, next) => {
  try {
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
    const { content, post_id } = req.body;
    try {
      const id = uuidv4();
      const newComment: IComments = {
        id,
        user_id: req.user.user_id,
        post_id,
        content,
      };
      await db.insert_comment(newComment);
      res.json({ message: "Successfully commented on post!", id})
    } catch (error) {
      res
        .status(500)
        .json({ message: "Error in posts.ts", error: error.message });
    }
  }
);
export default router;
