import { Router } from "express";
import * as passport from "passport";
import { ReqUser } from "../../types";
import db from '../../db/queries/users';

const router = Router();

// * router for current user

router.get("/", async (req: ReqUser, res, next) => {
  try {
    const users = await db.get_users();
    res.json(users);
    // res.json(`Welcome, ${req.user.email}`);
  } catch (error) {
    console.log(error);
  }
});

export default router;
