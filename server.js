//importa o express
import express from "express";

//atribui tudo oque o express pode fazer para a variavel app
const app = express();

//subir o servidor
app.listen(3001, () => {
    console.log("Servidor ecutando...");
    // res.send("Servidor rodando na porta 3000");
});

//cria uma rota
app.get("/api", (req, res) => {
    res.status(200).send("Bem vim à imersão");
});

app.get("/", (req, res) =>  {
    res.status(200).send("Bem vindo a minha API");
});