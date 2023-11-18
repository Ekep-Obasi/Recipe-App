import { Category } from "./category";
import { Glass } from "./glass";
import { Ingredient } from "./ingredient";

export type Drink = {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  category: Category[];
  recipe: string;
  ingredient: Ingredient[];
  glasses: Glass[];
  userID: number;
  isAlcoholic: boolean;
  price: string;
  likes: number;
};
