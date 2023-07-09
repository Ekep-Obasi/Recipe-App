const User = require("../models/User");
const bcrypt = require("bcrypt");

const forgotPassword = async (req, res) => {
  const { email, newPassword } = req.body;
  let user;
  try {
    user = await User.findOne({ where: { email } });
    if (!user) res.status(500).send("Internal Server Error 1");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }

  bcrypt.hash(newPassword, +process.env.SALT_ROUNDS).then(async (hash) => {
    if (!hash) res.status(500).send("Internal Server Error");
    try {
      await User.update({ ...user, password: hash }, { where: { email } });
      res.status(200).send("Password was updated succesfully");
    } catch (err) {
      res.status(500).send(err);
    }
  });
};

module.exports = forgotPassword;
