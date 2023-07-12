const Comment = require("../models/Comment");
const User = require("../models/User");

const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll({ include: User });
    res.send(comments);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneComment = async (req, res) => {
  try {
    const comment = await Comment.findOne({ where: { id: req.params.id } });
    res.status(200).send(comment);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createComment = async (req, res) => {
  try {
    const newComment = await Comment.create(req.body);
    res.status(200).send(newComment);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putComment = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (name && description) {
      await Comment.update(req.body, {
        where: { id: req.params.id },
      });
      const comment = await Comment.findByPk(req.params.id);
      res.status(200).send(comment);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchComment = async (req, res) => {
  try {
    await Comment.update(req.body, { where: { id: req.params.id } });
    const comment = await Comment.findByPk(req.params.id);
    res.status(200).send(comment);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllComments,
  getOneComment,
  createComment,
  putComment,
  patchComment,
  deleteComment,
};
