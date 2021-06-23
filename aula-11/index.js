const express = require('express');
const app = express();

app.get('/inicio', (req, res) => {
  res.send('Wel já comeu lukinha pelo Get')
})

app.post('/inicio', (req, res) => {
  res.send('Wel já comeu lukinha pelo Post')
})

app.put('/inicio', (req, res) => {
  res.send('Wel já comeu lukinha pelo Puta')
})

app.delete('/inicio', (req, res) => {
  res.send('Wel já comeu lukinha pelo deleta')
})

app.patch('/inicio', (req, res) => {
  res.send('Wel já comeu lukinha pelo patch')
})

app.listen(3000, () => {
  console.log(`O meu serviço HTTP está rodando na porta: 3000`)
});
