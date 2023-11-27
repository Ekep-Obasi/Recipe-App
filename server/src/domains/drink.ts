import { Category } from "./category";
import { Glass } from "./glass";
import Ingredient from "./ingredient";

export type Drink = {
  id: number;
  name: string;
  description: string;
  imageURL: string;
  categories: Category[];
  recipe: string;
  ingredients: Ingredient[];
  glasses: Glass[];
  userId: number;
  isAlcoholic: boolean;
  price: string;
  likes: number;
};
