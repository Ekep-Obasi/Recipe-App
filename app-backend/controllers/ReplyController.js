const Reply = require("../models/Reply");

const getAllReplies = async (req, res) => {
  try {
    const replies = await Reply.findAll();
    res.send(replies);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getOneReply = async (req, res) => {
  try {
    const reply = await Reply.findOne({ where: { id: req.params.id } });
    res.status(200).send(reply);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createReply = async (req, res) => {
  try {
    const newreply = await Reply.create(req.body);
    res.status(200).send(newreply);
  } catch (err) {
    res.status(500).send(err);
  }
};

const putReply = async (req, res) => {
  const { name, description } = req.body;
  try {
    if (content) {
      await Reply.update(req.body, {
        where: { id: req.params.id },
      });
      const reply = await Reply.findByPk(req.params.id);
      res.status(200).send(reply);
    } else {
      res.status(400).send({ message: "bad request" });
    }
  } catch (err) {
    res.status(500).send(err);
  }
};

const patchReply = async (req, res) => {
  try {
    await Reply.update(req.body, { where: { id: req.params.id } });
    const reply = await Reply.findByPk(req.params.id);
    res.status(200).send(reply);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deleteReply = async (req, res) => {
  try {
    console.log(req.params.id);
    await Reply.destroy({ where: { id: req.params.id } });
    res.status(200).send({ message: "Operation success" });
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  getAllReplies,
  getOneReply,
  createReply,
  putReply,
  patchReply,
  deleteReply,
};
