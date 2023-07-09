const Ingredient = require("../models/Ingredient");

const getAllIngredients = async (req, res) => {
  try {
    const ingredients = await Ingredient.findAll();
    res.send(ingredients);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneIngredient = async (req, res) => {
  try {
    const ingredient = await Ingredient.findOne({
      where: { id: req.params.id },
    });
    res.status(200).send(ingredient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createIngredient = async (req, res) => {
  try {
    const newIngredient = await Ingredient.create(req.body);
    res.status(200).send(newIngredient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putIngredient = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await Ingredient.update(req.body, {
        where: { id: req.params.id },
      });
      const ingredient = await Ingredient.findByPk(req.params.id);
      res.status(200).send(ingredient);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchIngredient = async (req, res) => {
  try {
    await Ingredient.update(req.body, { where: { id: req.params.id } });
    const ingredient = await Ingredient.findByPk(req.params.id);
    res.status(200).send(ingredient);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteIngredient = async (req, res) => {
  try {
    console.log(req.params.id);
    await Ingredient.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllIngredients,
  getOneIngredient,
  createIngredient,
  putIngredient,
  patchIngredient,
  deleteIngredient,
};
