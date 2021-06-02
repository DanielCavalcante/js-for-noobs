const models = require("../models/index");

const getAllUsers = async (req, res) => {
  try {
    const usuarios = await models.User.findAll({});
    return res.status(200).json({ usuarios });
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers
};