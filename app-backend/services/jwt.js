const jwt = require("jsonwebtoken");

const signToken = (data) => {
  return jwt.sign({ data }, process.env.JWT_ACCES_TOKEN, { expiresIn: "24h" });
};

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_ACCES_TOKEN);
};

module.exports = {
  signToken,
  verifyToken,
};
