import conectarAoBanco from "../config/dbConfig.js"
// Conecta ao banco de dados utilizando a string de conexão fornecida como variável de ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para buscar todos os posts do banco de dados
export async function getTodosPosts() {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts" dentro do banco de dados
    const colecao = db.collection("posts");
    // Retorna um array com todos os documentos da coleção
    return colecao.find().toArray();
}

// Função assíncrona para criar um novo post no banco de dados
export async function criarPost(novoPost) {
    // Seleciona o banco de dados "imersao-instabytes"
    const db = conexao.db("imersao-instabytes");
    // Seleciona a coleção "posts"
    const colecao = db.collection("posts");
    // Insere um novo documento (o novo post) na coleção
    // O método `insertOne()` retorna um objeto com informações sobre a inserção,
    // incluindo o ID do documento inserido
    return colecao.insertOne(novoPost)
}

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    //guardar no objectId o id do post, é uma forma que o MongoDB obriga a usar para saber qual é o id do post que queremos atualizar
    const ObjID = new ObjectId.createFromHexString(id);
    // return colecao.updateOne(id, `${novoPost}`);
 return colecao.updateOne({_id: new ObjectId(ObjID)}, {$set: novoPost});
}

export default {
    getTodosPosts,
    criarPost,
    atualizarPost
}