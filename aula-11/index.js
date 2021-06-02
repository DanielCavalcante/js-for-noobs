const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const routes = require('./app/routes');

app.use('/api', routes);

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
