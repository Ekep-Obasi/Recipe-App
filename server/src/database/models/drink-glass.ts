import { ForeignKey, Table } from "sequelize-typescript";
import Glass from "./glass";
import Drink from "./drink";
import { Model } from "sequelize";

@Table
class DrinkGlass extends Model {
  @ForeignKey(() => Drink)
  drinkId: number;

  @ForeignKey(() => Glass)
  glassId: number;
}

export default DrinkGlass;
