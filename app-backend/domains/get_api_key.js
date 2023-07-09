const User = require("../models/User");
const main = require("../services/nodemailer");
const generateEmailApiKeyMarkUp = require("../utils/email-markup");
const uuid = require("uuid");

const getApiKey = async (req, res) => {
  const { email } = req.body;
  try {
    await User.update({ ...req.body, apiKey: uuid.v4() }, { where: { email } });
    const user = await User.findOne({ where: { email } });
    const html = generateEmailApiKeyMarkUp(user.apiKey);
    main(email, html);
    res.status(200).send("Operation Successful");
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

module.exports = getApiKey;
