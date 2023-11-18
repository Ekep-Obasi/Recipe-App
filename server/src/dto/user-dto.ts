import { User } from "../domains/user";

export type ISignUpUser = Omit<User, "apiKey" | "role" | "id" | "drinks">;

export type ISignUpPayload = Omit<User, "apiKey" | "role" | "id" | "salt"| "drinks">;

export type ILoginUserPayload = Pick<User, "email" | "password">;

export type IPutUserPayload = Omit<User, "id" | "email" | "password">;

export type IEditProfilePayload = Partial<IPutUserPayload>;

export type IResetPasswordPayload = Pick<User, "email" | "password">;
