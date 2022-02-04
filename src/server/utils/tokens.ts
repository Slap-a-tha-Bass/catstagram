import * as jwt from "jsonwebtoken";
import { ReqUser } from "../types";
import { jwtConfig } from "../config";

export const createLoginToken = (req: ReqUser, res: any) => {
  const token = jwt.sign(
    { user_id: req.user.id, email: req.user.email },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expires }
  );
  res.json(token);
  return;
};
export const createRegisterToken = (register: any, email: string, res: any) => {
  const token = jwt.sign(
    { user_id: register.rows.id, email },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expires }
  );
  console.log({ register });
  res.json({ register, token });
  return;
};
