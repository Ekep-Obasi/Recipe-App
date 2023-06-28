const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Glass = sequelize.define(
  "glass",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Glass;
