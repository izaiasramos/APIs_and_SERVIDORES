// todas as minhas rotas:

import express from "express";
// Importa o módulo Express, que é a base para criar a aplicação web. Ele fornece ferramentas para lidar com requisições HTTP.

import { listarPosts, listarUsers } from "../controllers/postsControllers.js";
// Importa a função `listarPosts` e listarUsers do arquivo `postsControllers.js`. Essa função se conecta ao banco de dados e retorna os posts e os users.

const routes = (app) => {//
// Define uma função chamada `routes` que recebe a aplicação Express como parâmetro. Essa função será responsável por configurar as rotas da aplicação.

    app.use(express.json());//faz com que o express faça o parse do json, transforme a requisição que vem em texto em json
    // Habilita o middleware `express.json()`. Isso permite que o Express entenda as requisições que enviam dados no formato JSON.

    // cria uma rota, pagina inicial
    app.get("/", (req, res) =>  {
        res.status(200).send("Bem vindo a minha API");//função de callback executada quando a rota é acessada
        // Define uma rota GET para a raiz (/) da aplicação. Quando essa rota é acessada, a função de callback é executada, enviando uma resposta com o status 200 (OK) e a mensagem "Bem vindo a minha API".
    });

    // cria uma rota dos posts, e passa a função que lista todos os posts salvos no DB
    app.get("/posts", listarPosts);
    // Define uma rota GET para a rota "/posts". Quando essa rota é acessada, a função `listarPosts` é chamada. Essa função provavelmente buscará todos os posts no banco de dados e enviará a resposta.

    app.get("/users", listarUsers);
}

export default routes;
// Exporta a função `routes` como padrão, permitindo que ela seja importada em outros arquivos.