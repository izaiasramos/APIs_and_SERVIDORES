// todas as responsabilidades de lidar com as requisições e respostas
// aqui listaremos os postes lá na rota, que vai receber a requisição, executar a função 
// getTodosPosts e enviar a resposta:

import getTodosPosts from "../models/postsModels.js";
// Importa a função `getTodosPosts` do arquivo `postsModels.js`. Essa função é responsável por buscar todos os posts do banco de dados.

export async function listarPosts(req, res) {
    // Define uma função assíncrona chamada `listarPosts` que recebe como parâmetros a requisição (req) e a resposta (res).
    const posts = await getTodosPosts();
    // Chama a função `getTodosPosts` e armazena o resultado (um array de posts) na variável `posts`. O `await` indica que a função é assíncrona e espera o resultado antes de continuar.

    res.status(200).json(posts);
    // Envia uma resposta HTTP com o status 200 (sucesso) e o corpo da resposta como um JSON contendo o array de posts.
}