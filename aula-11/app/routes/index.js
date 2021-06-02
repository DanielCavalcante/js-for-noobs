const { Router } = require('express');
const controllers = require('../controlllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome Levi'))

router.get('/usuarios', controllers.getAllUsers);
router.post('/create-usuario', controllers.createUser);

module.exports = router;