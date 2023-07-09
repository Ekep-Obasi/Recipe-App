const User = require("../models/User");
const { signToken } = require("../services/jwt");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      res.status(401).send("No such User || Sign Up first");
    } else {
      bcrypt.compare(password, user.password).then((state) => {
        if (state) {
          const token = signToken(user);
          res.status(200).send({ user, token });
        } else {
          res.send(401).status("Un Authorized");
        }
      }).catch((err) => res.status(500).send("Internal Server Error"));
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = loginUser;
