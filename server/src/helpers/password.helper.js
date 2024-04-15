import bcrypt from "bcrypt";

export const createHashPassword = async (password, salt = 8) => {
  return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
