const models = require("../models/index");

const buscarUsuarios = async (req, res) => {
  try {
    const usuarios = await models.Users.findAll({});
    return res.json(usuarios);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const criarUsuario = async (req, res) => {
  const { name, email, password } = req.body
  try {
    const usuario = await models.Users.create(
      { 
        name, 
        email, 
        password, 
        createdAt: new Date(),
        updatedAt: new Date() 
      }
    );
    return res.json(usuario);
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  buscarUsuarios,
  criarUsuario
};