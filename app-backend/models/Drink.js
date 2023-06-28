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
  imageUrl: DataTypes.STRING,
  recipe: DataTypes.STRING,
  isAlcoholic: DataTypes.BOOLEAN,
});

module.exports = Drink;
