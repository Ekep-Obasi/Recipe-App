import Ingredient from "../domains/ingredient";

export type ICreateIngredient = Omit<Ingredient, "id">;

export type IUpdateIngredient = Partial<ICreateIngredient>