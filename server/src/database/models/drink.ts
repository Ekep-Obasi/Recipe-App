import {
  AutoIncrement,
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from "sequelize-typescript";
import Category from "./category";
import User from "./user";
import Ingredient from "./ingredient";
import Glass from "./glass";

@Table
class Drink extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  decription: string;

  @Column
  imageURL: string;

  @HasMany(() => Category)
  category: Category[];

  @Column
  recipe: string;

  @HasMany(() => Ingredient)
  ingredient: Ingredient[];

  @HasMany(() => Glass)
  glasses: Glass[];

  @ForeignKey(() => User)
  @Column(DataType.INTEGER)
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  isAlcoholic: boolean;

  @Column
  price: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default Drink;
