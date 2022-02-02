import * as jwt from "jsonwebtoken";
import { ReqUser } from "../types";
import { jwtConfig } from "../config";

export const createLoginToken = (req: ReqUser, res: any) => {
  const token = jwt.sign(
    { userid: req.user.id, email: req.user.email },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expires }
  );
  res.json(token);
  return;
};
export const createRegisterToken = (register: any, email: string, res: any) => {
  const token = jwt.sign(
    { userid: register.insertId, email },
    jwtConfig.secret,
    { expiresIn: jwtConfig.expires }
  );
  res.json({ register, token });
  return;
};
