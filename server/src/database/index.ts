import { Sequelize } from "sequelize-typescript";
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } from "../constants";
import {
  Category,
  Drink,
  DrinkCategory,
  DrinkGlass,
  DrinkIngredient,
  Glass,
  Ingredient,
  User,
} from "./models";

const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  host: DB_HOST,
  logging: false,
});

(async () => {
  try {
    sequelize.addModels([
      Category,
      DrinkCategory,
      DrinkIngredient,
      DrinkGlass,
      Drink,
      Glass,
      Ingredient,
      User,
    ]);

    await sequelize.sync();
    console.log("Created all tables succesfully                  ✅");
  } catch (err) {
    throw console.error("An error occured while creating tables  ❌");
  }
})();

export const dbTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully ✅");
  } catch (error) {
    console.error("Unable to connect to the database             ❌");
  }
};

export default sequelize;
