import { Model } from "sequelize";
import { ForeignKey, Table } from "sequelize-typescript";
import Drink from "./drink";
import Ingredient from "./ingredient";

@Table
class DrinkIngredient extends Model {
  @ForeignKey(() => Drink)
  drinkId: number;

  @ForeignKey(() => Ingredient)
  ingredientId: number;
}

export default DrinkIngredient;
