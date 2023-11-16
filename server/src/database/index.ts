import { Sequelize } from "sequelize-typescript";
import { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } from "../constants";

const sequelize = new Sequelize({
  database: DB_NAME,
  dialect: "mysql",
  username: DB_USERNAME,
  password: DB_PASSWORD,
  storage: ":memory:",
  host: DB_HOST,
  models: [__dirname + "/models/**.{ts}"],
});

export const dbTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("DB Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default sequelize;
