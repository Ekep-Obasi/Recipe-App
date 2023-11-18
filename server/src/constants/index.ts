import dotEnv from "dotenv";
import { UserRole } from "../domains/user";

dotEnv.config();

if (process.env.NODE_DEV === "prod") {
  const configFile = `./.env.${process.env.NODE_ENV}`;
  dotEnv.config({ path: configFile });
}

export const PORT_NUMBER = process.env.PORT_NUMBER as string;
export const DB_NAME = process.env.DB_NAME as string;
export const DB_USERNAME = process.env.DB_USERNAME as string;
export const DB_PASSWORD = process.env.DB_PASSWORD as string;
export const DB_HOST = process.env.DB_HOST as string;

// user
export const UserRoles: UserRole[] = ["GUEST_USER", "ADMIN_USER"];

// glass sizes
export const GlassSizes = ["small", "meduim", "large"];

// Regex
export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const phoneNumberRegex = RegExp(/^6(5|7|8|9)[0-9]{7}$/);

// webtokens
export const SALT_ROUNDS = process.env.SALT_ROUNDS as string;
