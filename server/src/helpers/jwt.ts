import jwt from "jsonwebtoken";
import { ILoginUserPayload } from "../dto/user-dto";
import { SALT_ROUNDS } from "../constants";

export async function generateTokenSignature(payload: ILoginUserPayload) {
  return await jwt.sign(payload, SALT_ROUNDS);
}

export async function verifyTokenSignature(token: string) {
  return (await jwt.verify(token, SALT_ROUNDS)) as Promise<ILoginUserPayload>;
}
