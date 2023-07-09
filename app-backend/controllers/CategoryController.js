const Category = require("../models/Category");
const User = require("../models/User");

const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.send(categories);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneCategory = async (req, res) => {
  try {
    const category = await Category.findOne({ where: { id: req.params.id } });
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createCategory = async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).send(newCategory);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await Category.update(req.body, {
        where: { id: req.params.id },
      });
      const category = await Category.findByPk(req.params.id);
      res.status(200).send(category);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchCategory = async (req, res) => {
  try {
    await Category.update(req.body, { where: { id: req.params.id } });
    const category = await Category.findByPk(req.params.id);
    res.status(200).send(category);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteCategory = async (req, res) => {
  try {
    console.log(req.params.id);
    await Category.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllCategories,
  getOneCategory,
  createCategory,
  putCategory,
  patchCategory,
  deleteCategory,
};
