const { DataTypes } = require("sequelize");
const sequelize = require("../db/.");

const NutritionalContent = sequelize.define(
  "nutritionalContent",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    calories: DataTypes.STRING,
    fats: DataTypes.STRING,
    saturates: DataTypes.STRING,
    salt: DataTypes.STRING,
    protein: DataTypes.STRING,
    carbs: DataTypes.STRING,
    fibre: DataTypes.STRING,
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = NutritionalContent;
