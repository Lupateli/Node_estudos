const express = require('express')

const app = express();

app.get('/home', (req, res) =>{
    res.status(200).send('<h1>Ola teste</h1>');
})

app.get('/users', (req, res) =>{
    const  users = [
        {
            name: "Joao pao",
            email: "jpap@pao.com"
        },
        {
            name: "Maria pao",
            email: "Maria@pao.com"
        }
    ];

    res.status(200).json(users);
})

const port = 8080;

app.listen(port, () =>{
    console.log('Rodando com express')
})

// mongodb+srv://glupateli_db_user:nodesenha@projetonodejs.n8d6xd9.mongodb.net/?appName=ProjetoNodeJs