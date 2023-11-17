import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Glass from "./glass";
import Drink from "./drink";

@Table({
  tableName: "drinks_glasses",
  timestamps: true,
})
class DrinkGlass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @ForeignKey(() => Drink)
  @Column(DataType.INTEGER)
  drinkId: number;

  @ForeignKey(() => Glass)
  @Column(DataType.INTEGER)
  glassId: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default DrinkGlass;
