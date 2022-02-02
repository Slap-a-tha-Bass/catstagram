import { Router } from "express";
import { ReqUser } from "../../types";
import { createLoginToken } from "../../utils/tokens";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    createLoginToken(<ReqUser>req, res);
    res.json();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error in login router.", error: error.message });
  }
});

export default router;
