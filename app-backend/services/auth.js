const User = require("../models/User");
const { verifyToken } = require("./jwt");

const authMiddleware = async (req, res, next) => {
  const authToken = req.get("Authorization");
  const token = authToken?.split(" ").pop();

  if (!token) res.status(401).send("forbidden");
  try {
    const { data } = verifyToken(token);
    const user = await User.findByPk(data.id);
    if (!user) return res.sendStatus(401);
    req.user = user;
    next();
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = authMiddleware;
