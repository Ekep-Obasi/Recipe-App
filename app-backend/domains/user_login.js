const User = require("../models/User");
const { signToken } = require("../services/jwt");

const loginUser = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).send("No such User || Sign Up first");
    } else {
      const token = signToken(user);
      res.status(200).send({ user, token });
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = loginUser;
