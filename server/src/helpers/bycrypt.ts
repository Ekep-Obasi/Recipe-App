import bcrypt from "bcrypt";

export async function generateSalt() {
  return await bcrypt.genSalt();
}

export async function hashPassword(password: string, salt: string) {
  return await bcrypt.hash(password, salt);
}

export async function validatePassword(
  enteredPassword: string,
  savedPassword: string,
  salt: string
) {
  return savedPassword === await hashPassword(enteredPassword, salt);
}
