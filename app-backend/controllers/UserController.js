const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneUser = async (req, res) => {
  try {
    const user = await User.findOne({ where: { id: req.params.id } });
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(500).send(newUser);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putUser = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await User.update(req.body, {
        where: { id: req.params.id },
      });
      const user = await User.findByPk(req.params.id);
      res.status(200).send(user);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchUser = async (req, res) => {
  try {
    await User.update(req.body, { where: { id: req.params.id } });
    const user = await User.findByPk(req.params.id);
    res.status(200).send(user);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  putUser,
  patchUser,
  deleteUser,
};
