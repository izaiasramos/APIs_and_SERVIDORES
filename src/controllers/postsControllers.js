//todas as responsabilidades de lidar com as requisições e respostas
//aqui listaremos os postes lá na rota, que vai receber a requisição, executar a função 
//getTodosPosts e enviar a resposta:

import getTodosPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getTodosPosts();
    res.status(200).json(posts);
}
