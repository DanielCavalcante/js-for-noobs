const { Router } = require('express');
const usuariosControllers = require('../controlllers/usuarios');
const router = Router();

//Criei a rota de retornar usuarios
router.get('', usuariosControllers.buscarUsuarios);
router.post('', usuariosControllers.criarUsuario);

module.exports = router;