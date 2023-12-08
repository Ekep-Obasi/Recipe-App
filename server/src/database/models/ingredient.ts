import {
  Table,
  Column,
  Model,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  DataType,
  BelongsToMany,
} from 'sequelize-typescript'
import Drink from './drink'
import DrinkIngredient from './drink-ingredient'

@Table({
  tableName: 'ingredients',
  timestamps: true,
})
class Ingredient extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @Column(DataType.CHAR(255))
  name: string

  @Column(DataType.TEXT)
  description: string

  @BelongsToMany(() => Drink, () => DrinkIngredient)
  drinks: Drink[]

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @DeletedAt
  deletedAt: Date
}

export default Ingredient
