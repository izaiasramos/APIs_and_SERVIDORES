import { MongoClient } from 'mongodb';

export default async function conectarAoBanco(stringConexao) {//export default pega função de um arquivo e exporta para usar em outro arquivo, iremos importar ela no nosso arquivo server.js
    let mongoClient;

    try {
        mongoClient = new MongoClient(stringConexao);
        console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit();
    }
}