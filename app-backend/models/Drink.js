const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Drink = sequelize.define("drink", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  imageUrl: DataTypes.STRING,
  recipe: DataTypes.STRING,
  isAlcoholic: DataTypes.BOOLEAN,
  apiKey: DataTypes.STRING,
});

module.exports = Drink;
