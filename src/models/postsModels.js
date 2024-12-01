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

import { ObjectId } from "mongodb"; // Importa o ObjectId para manipular IDs do MongoDB

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");

    // Cria um ObjectId diretamente do ID fornecido
    const ObjID = new ObjectId(id);

    // Atualiza o documento correspondente ao ID
    return colecao.updateOne({ _id: ObjID }, { $set: novoPost });
}

export default {
    getTodosPosts,
    criarPost,
    atualizarPost
}