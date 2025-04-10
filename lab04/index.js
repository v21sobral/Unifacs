const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000.');
    console.log('Acesse a url http://localhost:3000');
});

app.get('/', (req, res) => res.send('Servidor de boas!'));

app.get('/jogos', (req, res) => {
    let jogos = [
        {nome: "Super Mario World", ano: 1990, categoria: "Plataforma"},
        {nome: "Age of Empires II", ano: 1999, categoria: "Estratégia"}
    

    ];

    res.send(jogos);
});