import * as express from "express";
import { v4 as uuidv4 } from "uuid";
import db from "./db/queries/users";
import { Users } from "./types";
const router = express.Router();

router.get("/api/users", async (req, res, next) => {
  try {
    const all_users = await db.get_users();
    res.json({ all_users, message: "Found all users!" });
  } catch (error) {
    console.log(error);
  }
});
router.post("/api/users", (req, res, next) => {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
});
router.post("/auth/register", async (req, res, next) => {
  const { first_name, last_name, username, email, password } = req.body;
  try {
    const id = uuidv4();
    const newUser: Users = {
      id,
      first_name,
      last_name,
      username,
      email,
      password,
    };
    const register = await db.create_user(newUser);
    res.json({ register });
  } catch (error) {
    console.log(error, error.message);
  }
});
export default router;
