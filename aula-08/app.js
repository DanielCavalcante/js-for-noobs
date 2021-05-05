const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8080

app.use(bodyParser.json())

app.post('/autenticar', (req, response) => {
  let login = req.body.login
  let senha = req.body.senha

  if (login == 'nena@gmail.com' && senha == 'nena123') {
    response.send('Login realizado com sucesso')
  } else {
    response.send('Login ou senha incorretos')
  }

})

app.get('/', (req, response) => {
  response.send('Nossa resposta')
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})