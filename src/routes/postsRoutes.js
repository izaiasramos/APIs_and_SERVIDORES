//todas as minhas rotas:

import express from "express";
import {listarPosts} from "../controllers/postsControllers.js";//puxar a função listarPosts para esse arquivo para usar na rota

const routes = (app) => {
    app.use(express.json());//faz com que o express faça o parse do json, transforme a requisição que vem em texto em json

    //cria uma rota, pagina inicial
    app.get("/", (req, res) =>  {
        res.status(200).send("Bem vindo a minha API");
    });

    //cria uma rota dos posts
    app.get("/posts", listarPosts);
    }

export default routes;