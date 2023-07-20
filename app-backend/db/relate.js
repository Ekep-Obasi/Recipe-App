const sequelize = require(".");
const Category = require("../models/Category");
const Comment = require("../models/Comment");
const Drink = require("../models/Drink");
const Glass = require("../models/Glass");
const Ingredient = require("../models/Ingredient");
const NutritionalContent = require("../models/NutritionalContent");
const Reply = require("../models/Reply");
const User = require("../models/User");

module.exports = () => {
  sequelize.sync();

  User.hasMany(Drink, { as: "creator" });
  Drink.belongsTo(User);

  Drink.hasOne(NutritionalContent, { as: "nutritionalcontent" });

  Comment.hasMany(User, { as: "userId" });
  User.belongsTo(Comment);

  Comment.belongsToMany(Reply, { through: "comment_reply" });
  Reply.belongsToMany(Comment, { through: "comment_reply" });

  Drink.belongsToMany(Category, { through: "drinks_category" });
  Category.belongsToMany(Drink, { through: "drinks_category" });

  Drink.belongsToMany(Ingredient, { through: "drinks_ingredient" });
  Ingredient.belongsToMany(Drink, { through: "drinks_ingredient" });

  Drink.hasMany(Glass);
  Glass.belongsTo(Drink);

  sequelize.sync();
};
