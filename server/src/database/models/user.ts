import {
  Table,
  Model,
  Column,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  PrimaryKey,
  AutoIncrement,
  HasMany,
  Unique,
  Is,
  DataType,
} from "sequelize-typescript";
import Drink from "./drink";
import { UserRoles, emailRegex, phoneNumberRegex } from "../../constants";

@Table({
  tableName: "users",
  timestamps: true,
})
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id: number;

  @Column(DataType.CHAR(255))
  firstName: string;

  @Column(DataType.CHAR(255))
  lastName: string;

  @Is(emailRegex)
  @Unique
  @Column(DataType.CHAR(255))
  email: string;

  @Column(DataType.CHAR(255))
  password: string;

  @Is(phoneNumberRegex)
  @Column(DataType.CHAR(255))
  phoneNumber: string;

  @Column(DataType.CHAR(255))
  apiKey: string;

  @Column(DataType.ENUM({ values: UserRoles }))
  role: string;

  @HasMany(() => Drink)
  drinks: Drink[];

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;

  @DeletedAt
  deletedAt: Date;
}

export default User;
