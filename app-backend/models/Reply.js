const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Reply = sequelize.define(
  "reply",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT,
    },
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Reply;
