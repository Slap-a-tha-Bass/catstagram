import * as bcrypt from "bcrypt";

// * password handler for auth>register.ts

export const generateHash = async (password: string) => {
  try {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  } catch (error) {
    throw error;
  }
};

export const compareHash = async (password: string, hashed: string) => {
  try {
    return bcrypt.compareSync(password, hashed);
  } catch (error) {
    throw error;
  }
};
