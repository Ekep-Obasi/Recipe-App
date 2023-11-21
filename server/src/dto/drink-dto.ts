import { Drink } from "../domains/drink";

export type ICreateDrink = Omit<
  Drink,
  "glasses" | "ingredients" | "categories"
>;

export type ICreateDrinkPayload = Omit<ICreateDrink, "id">;

export type IUpdateDrink = Omit<ICreateDrink, "id" | "userId">;

export type IUpdateDrinkPayload = Partial<IUpdateDrink>;

export type IPutDrinkPayload = Required<IUpdateDrinkPayload>;
