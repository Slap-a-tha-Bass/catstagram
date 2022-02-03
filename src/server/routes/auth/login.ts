import { Router } from "express";
import db from "../../db/queries/users";
import * as passport from "passport";
import { ReqUser } from "../../types";
import { createLoginToken } from "../../utils/tokens";

const router = Router();

router.post("/", passport.authenticate("local"), async (req, res, next) => {
  try {
    createLoginToken(req, res);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in login router.", error: error.message });
  }
});

export default router;
