import { Model } from "sequelize";
import { ForeignKey, Table } from "sequelize-typescript";
import Drink from "./drink";
import Category from "./category";

@Table
class DrinkCategory extends Model {
  @ForeignKey(() => Drink)
  drinkId: number;

  @ForeignKey(() => Category)
  categoryId: number;
}

export default DrinkCategory;
