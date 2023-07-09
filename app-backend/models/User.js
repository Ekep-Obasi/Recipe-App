const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const User = sequelize.define(
  "user",
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
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: DataTypes.STRING,
    apiKey: {
      type: DataTypes.STRING,
      defaultValue: null,
    },
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = User;
