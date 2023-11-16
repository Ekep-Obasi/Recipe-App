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
} from "sequelize-typescript";
import { GlassSizes } from "../../constants";

@Table
class Glass extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column(DataType.ENUM({ values: GlassSizes }))
  size: string;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default Glass;
