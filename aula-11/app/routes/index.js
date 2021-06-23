const { Router } = require('express');
const controllers = require('../controlllers');
const router = Router();

router.get('/usuarios', controllers.getAllUsers);

module.exports = router;