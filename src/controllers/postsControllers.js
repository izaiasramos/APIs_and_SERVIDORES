// Importa as funções para buscar e criar posts do modelo de dados
import {getTodosPosts, criarPost} from "../models/postsModels.js";
// Importa o módulo do sistema de arquivos para manipular arquivos
import fs from "fs";

// Define uma função assíncrona para listar todos os posts
export async function listarPosts(req, res) {
     // Chama a função para buscar todos os posts do banco de dados
    const posts = await getTodosPosts();
    // Envia uma resposta HTTP com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

// Define uma função assíncrona para criar um novo post
export async function postarNovoPost(req, res) {
    // Obtém os dados do novo post a partir do corpo da requisição
    const novoPost = req.body;
    // Tenta criar o novo post
    try {
        // Chama a função para criar um novo post no banco de dados
        const postCriado = await criarPost(novoPost);
        // Envia uma resposta HTTP com status 200 (OK) e o post criado
        res.status(200).json(postCriado);  
    } catch(erro) {
        // Captura qualquer erro que possa ocorrer durante a criação do post
        console.error(erro.message);
        // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}
// Define uma função assíncrona para fazer upload de uma imagem e criar um novo post
export async function uploadImagem(req, res) {
    // Cria um objeto com os dados do novo post, incluindo o nome da imagem
    const novoPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };
    // Tenta criar o novo post e mover a imagem para o local correto
    try {
        // Chama a função para criar um novo post no banco de dados  
        const postCriado = await criarPost(novoPost);
        // Gera um novo nome para a imagem usando o ID do post criado
        const imagemAtualizada = `uploads/${postCriado.insertedId}.png`
        // Move a imagem para o local de destino
        fs.renameSync(req.file.path, imagemAtualizada)
        // Envia uma resposta HTTP com status 200 (OK) e o post criado
        res.status(200).json(postCriado);  
    } catch(erro) {
        // Captura qualquer erro que possa ocorrer durante o processo
        console.error(erro.message);
        // Envia uma resposta HTTP com status 500 (Erro interno do servidor) e uma mensagem de erro
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}