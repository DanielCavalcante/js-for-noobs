const express = require('express');
const app = express();
const port = 3000;

app.get('', (req, res) => {
    res.send('JS for Noobs')
})

app.listen(port, () => {
    console.log(`Servidor on na porta: ${port}`)
})