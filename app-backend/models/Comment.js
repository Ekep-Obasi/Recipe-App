const { DataTypes } = require("sequelize");
const sequelize = require("../db/index");

const Comment = sequelize.define(
  "comment",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    content: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    likes: DataTypes.INTEGER,
    dislikes: DataTypes.INTEGER,
  },
  {
    paranoid: true,
    timestamps: true,
  }
);

module.exports = Comment;
