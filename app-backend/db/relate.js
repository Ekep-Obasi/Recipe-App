const sequelize = require(".");
const Category = require("../models/Category");
const Drink = require("../models/Drink");
const Glass = require("../models/Glass");
const Ingredient = require("../models/Ingredient");
const User = require("../models/User");

module.exports = () => {
  sequelize.sync();

  User.hasMany(Drink);
  Drink.belongsTo(User);

  Drink.belongsToMany(Category, { through: "drinks_category" });
  Category.belongsToMany(Drink, { through: "drinks_category" });

  Drink.belongsToMany(Ingredient, { through: "drinks_ingredient" });
  Ingredient.belongsToMany(Drink, { through: "drinks_ingredient" });

  Drink.hasMany(Glass);
  Glass.belongsTo(Drink);

  sequelize.sync();
};
