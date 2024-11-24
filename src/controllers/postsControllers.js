// todas as responsabilidades de lidar com as requisições e respostas
// aqui listaremos os postes lá na rota, que vai receber a requisição, executar a função 
// getTodosPosts e enviar a resposta:

// Importa o objeto padrão (default export) do arquivo `postsModels.js`.
import postsModels from "../models/postsModels.js";
// Desestrutura o objeto `postsModels` para extrair as funções `getTodosPosts` e `getUsers`.
const { getTodosPosts, getUsers } = postsModels;

export async function listarPosts(req, res) {
    // Define uma função assíncrona chamada `listarPosts` que recebe como parâmetros a requisição (req) e a resposta (res).
    const posts = await getTodosPosts();
    // Chama a função `getTodosPosts` e armazena o resultado (um array de posts) na variável `posts`. O `await` indica que a função é assíncrona e espera o resultado antes de continuar.

    res.status(200).json(posts);
    // Envia uma resposta HTTP com o status 200 (sucesso) e o corpo da resposta como um JSON contendo o array de posts.
}
export async function listarUsers(req, res) {
    const users = await getUsers();
    res.status(200).json(users);
}