import {
  AutoIncrement,
  BelongsTo,
  BelongsToMany,
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
import Category from "./category";
import User from "./user";
import DrinkCategory from "./drink-category";
import Ingredient from "./ingredient";
import DrinkIngredient from "./drink-ingredient";
import DrinkGlass from "./drink-glass";
import Glass from "./glass";

@Table({
  tableName: "drinks",
  timestamps: true,
})
class Drink extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.CHAR(255))
  name: string;

  @Column(DataType.TEXT)
  decription: string;

  @Column(DataType.CHAR(255))
  imageURL: string;

  @Column(DataType.TEXT)
  recipe: string;

  @Column(DataType.INTEGER)
  likes: number;

  @Column(DataType.BOOLEAN)
  isAlcoholic: boolean;

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @BelongsToMany(() => Category, () => DrinkCategory)
  categories: Category[];

  @BelongsToMany(() => Ingredient, () => DrinkIngredient)
  ingredients: Ingredient[];

  @BelongsToMany(() => Glass, () => DrinkGlass)
  glasses: Glass[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default Drink;
