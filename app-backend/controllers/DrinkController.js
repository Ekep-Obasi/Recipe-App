const Drink = require("../models/Drink");

const getAllDrinks = async (req, res) => {
  try {
    const drinks = await Drink.findAll();
    res.send(drinks);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneDrink = async (req, res) => {
  try {
    const drink = await Drink.findOne({ where: { id: req.params.id } });
    res.status(200).send(drink);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createDrink = async (req, res) => {
  try {
    const newDrink = await Drink.create(req.body);
    res.status(200).send(newDrink);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putDrink = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await Drink.update(req.body, {
        where: { id: req.params.id },
      });
      const drink = await Drink.findByPk(req.params.id);
      res.status(200).send(drink);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchDrink = async (req, res) => {
  try {
    await Drink.update(req.body, { where: { id: req.params.id } });
    const drink = await Drink.findByPk(req.params.id);
    res.status(200).send(drink);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteDrink = async (req, res) => {
  try {
    await Drink.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllDrinks,
  getOneDrink,
  createDrink,
  putDrink,
  patchDrink,
  deleteDrink,
};

