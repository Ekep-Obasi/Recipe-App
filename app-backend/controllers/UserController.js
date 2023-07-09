const User = require("../models/User");
const bcrypt = require("bcrypt");
const { v4 } = require("uuid");

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
    const { password } = req.body;
    bcrypt.hash(password, +process.env.SALT_ROUNDS).then(async (hash) => {
      const newUser = await User.create({
        ...req.body,
        password: hash,
        apiKey: v4(),
      });
      res.status(200).send(newUser);
    });
  } catch (err) {
    res.status(500).send(err);
  }
};

const putUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (name && email && password) {
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
