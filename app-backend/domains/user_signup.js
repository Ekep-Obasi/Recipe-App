const bcrypt = require('bcrypt');
const User = require('../models/User');

const signUser = async (req, res) => {
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
