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

@Table
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Is(emailRegex)
  @Column
  @Unique
  email: string;

  @Column
  password: string;

  @Is(phoneNumberRegex)
  @Column
  phoneNumber: string;

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
