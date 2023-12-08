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
} from 'sequelize-typescript'
import Drink from './drink'
import Category from './category'

@Table({
  tableName: 'drinks_categories',
  timestamps: true,
})
class DrinkCategory extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number

  @ForeignKey(() => Drink)
  @Column(DataType.INTEGER)
  drinkId: number

  @ForeignKey(() => Category)
  @Column(DataType.INTEGER)
  categoryId: number

  @CreatedAt
  createdAt: Date

  @UpdatedAt
  updatedAt: Date

  @DeletedAt
  deletedAt: Date
}

export default DrinkCategory
