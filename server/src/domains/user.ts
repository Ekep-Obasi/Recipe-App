import { Drink } from "./drink";

export type UserRole = "GUEST_USER" | "ADMIN_USER";

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  apiKey: string;
  password: string;
  salt: string;
  phoneNumber: string;
  role: UserRole;
  drinks: Drink[];
};
