import { Router } from "express";
import db from "../../db/queries/users";

const router = Router();

// * router for all users
// TODO: change this to find the current logged in user

router.get("/", async (req, res, next) => {
  try {
    const all_users = await db.get_users();
    res.json({ all_users, message: "Found all users!" });
  } catch (error) {
    console.log(error);
  }
});

export default router;
