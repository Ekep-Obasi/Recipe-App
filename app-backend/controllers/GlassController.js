const Glass = require("../models/Glass");

const getAllGlasses = async (req, res) => {
  try {
    const glasses = await Glass.findAll();
    res.send(glasses);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneGlass = async (req, res) => {
  try {
    const glass = await Glass.findOne({ where: { id: req.params.id } });
    res.status(200).send(glass);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createGlass = async (req, res) => {
  try {
    const newGlass = await Glass.create(req.body);
    res.status(200).send(newGlass);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putGlass = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await Glass.update(req.body, {
        where: { id: req.params.id },
      });
      const glass = await Glass.findByPk(req.params.id);
      res.status(200).send(glass);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchGlass = async (req, res) => {
  try {
    await Glass.update(req.body, { where: { id: req.params.id } });
    const glass = await Glass.findByPk(req.params.id);
    res.status(200).send(glass);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteGlass = async (req, res) => {
  try {
    console.log(req.params.id);
    await Glass.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllGlasses,
  getOneGlass,
  createGlass,
  putGlass,
  patchGlass,
  deleteGlass,
};
