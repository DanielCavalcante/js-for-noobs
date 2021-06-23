const express = require('express');
const app = express();
const port = 3000;
const usuariosRoutes = require('./app/routes/usuarios');
const produtosRoutes = require('./app/routes/produtos');

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.use('/usuarios', usuariosRoutes);
app.use('/produtos', produtosRoutes);


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
