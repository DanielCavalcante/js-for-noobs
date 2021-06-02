const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const { User } = require('./app/models');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/usuarios', (req, res) => {
  const users = User.findAll({});
  res.json(users);
});

// app.post('/register', async (req, res) => {
//   const user = await User.create(req.body);
//   res.json(user);
// });

// app.get('/find/:id', (req, res) => {
//   res.json('Im in register');
// });


// app.put('/update/:id', (req, res) => {
//   res.json('Im in update');
// });

// app.delete('/delete/:id', (req, res) => {
//   res.json('Im in delete');
// });

app.listen(3000, () => {
  console.log(`O meu serviço HTTP está rodando na porta: 3000`)
});
