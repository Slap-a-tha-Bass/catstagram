import { Router } from "express";
import * as passport from "passport";
import { ReqUser } from "../../types";

const router = Router();

// * router for current user

router.get("/", async (req: ReqUser, res, next) => {
  try {
    res.json(`Welcome, ${req.user.email}`);
  } catch (error) {
    console.log(error);
  }
});

export default router;
