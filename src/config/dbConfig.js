import { MongoClient } from 'mongodb';
// // Importa a classe `MongoClient` do módulo `mongodb`. Essa classe é responsável por estabelecer a conexão com o banco de dados MongoDB.

export default async function conectarAoBanco(stringConexao) {
    try {
        const mongoClient = new MongoClient(stringConexao, {
            tls: true, // Ativa TLS (padrão para Atlas)
            tlsInsecure: true, // Ignora erros de certificado (não recomendado para produção)
        });      console.log('Conectando ao cluster do banco de dados...');
        await mongoClient.connect();
        console.log('Conectado ao MongoDB Atlas com sucesso!');

        return mongoClient;
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        process.exit(1); // Encerra a aplicação com erro
    }
}