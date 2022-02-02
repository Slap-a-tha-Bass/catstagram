import { Router } from "express";
import { v4 as uuidv4 } from "uuid";
import { generateHash } from "../../utils/passwords";
import db from "../../db/queries/users";
import { Users } from "../../types";

const router = Router();

// * register router for new users
// * utils>passwords.ts for generateHash function

router.post("/", async (req, res, next) => {
  const { first_name, last_name, username, email, password } = req.body;
  try {
    const id = uuidv4();
    const hashed = await generateHash(password);
    const newUser: Users = {
      id,
      first_name,
      last_name,
      username,
      email,
      password: hashed,
    };
    const register = await db.create_user(newUser);
    res.json({ register, hashed });
  } catch (error) {
    console.log(error, error.message);
  }
});
export default router;
