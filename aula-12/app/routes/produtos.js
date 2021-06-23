const { Router } = require('express');
const router = Router();

router.get('', (req, res) => {
  res.send("iPhone, Xiaomi");
})

router.post('', (req, res) => {
  const { name, mark, price } = req.body;
  res.send({ name, mark, price });
})

router.put('/:id', (req, res) => {
  res.send("iPhone, Xiaomi");
})

module.exports = router;