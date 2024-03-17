import bcrypt from "bcrypt";

export const createHashPassword = async (password) => {
  return await bcrypt.hash(password, 8);
};

export const comparePasswords = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};
