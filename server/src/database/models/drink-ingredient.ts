import {
  AutoIncrement,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  UpdatedAt,
} from 'sequelize-typescript'
import { ForeignKey, Table } from 'sequelize-typescript'
import Drink from './drink'
import Ingredient from './ingredient'

@Table({
  tableName: 'drinks_ingredients',
  timestamps: true,
})
class DrinkIngredient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @ForeignKey(() => Drink)
  drinkId: number

  @ForeignKey(() => Ingredient)
  ingredientId: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @DeletedAt
  deletedAt: Date
}

export default DrinkIngredient
