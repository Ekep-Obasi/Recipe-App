const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Ingredient = sequelize.define(
  "ingredients",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Ingredient;
