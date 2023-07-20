const NutritionalContent = require("../models/NutritionalContent");

const getAllNutritionalContents = async (req, res) => {
  try {
    const nutritionalContents = await NutritionalContent.findAll();
    res.send(nutritionalContents);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneNutritionalContent = async (req, res) => {
  try {
    const nutritionalContent = await NutritionalContent.findOne({
      where: { id: req.params.id },
    });
    res.status(200).send(nutritionalContent);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createNutritionalContent = async (req, res) => {
  try {
    const newNutritionalContent = await NutritionalContent.create(req.body);
    res.status(200).send(newNutritionalContent);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putNutritionalContent = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await NutritionalContent.update(req.body, {
        where: { id: req.params.id },
      });
      const nutritionalContent = await NutritionalContent.findByPk(
        req.params.id
      );
      res.status(200).send(nutritionalContent);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchNutritionalContent = async (req, res) => {
  try {
    await NutritionalContent.update(req.body, { where: { id: req.params.id } });
    const nutritionalContent = await NutritionalContent.findByPk(req.params.id);
    res.status(200).send(nutritionalContent);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteNutritionalContent = async (req, res) => {
  try {
    console.log(req.params.id);
    await NutritionalContent.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllNutritionalContents,
  getOneNutritionalContent,
  createNutritionalContent,
  putNutritionalContent,
  patchNutritionalContent,
  deleteNutritionalContent,
};
