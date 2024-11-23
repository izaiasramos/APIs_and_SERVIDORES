import { MongoClient } from 'mongodb';
// Importa a classe `MongoClient` do módulo `mongodb`. Essa classe é responsável por estabelecer a conexão com o banco de dados MongoDB.

export default async function conectarAoBanco(stringConexao) {//export default pega função de um arquivo e exporta para usar em outro arquivo, iremos importar ela no nosso arquivo server.js
// Define uma função assíncrona chamada `conectarAoBanco` que recebe a string de conexão como parâmetro. Essa função é exportada como padrão, permitindo que seja importada em outros arquivos.

    let mongoClient;
    // Declara uma variável `mongoClient` para armazenar o cliente MongoDB.

    try {
        mongoClient = new MongoClient(stringConexao);
        // Cria uma nova instância do cliente MongoDB usando a string de conexão fornecida.

        console.log('Conectando ao cluster do banco de dados...');
        // Imprime uma mensagem no console indicando que a conexão está sendo estabelecida.

        await mongoClient.connect();
        // Espera a conexão com o banco de dados ser estabelecida. O `await` é necessário porque o método `connect` é assíncrono.

        console.log('Conectado ao MongoDB Atlas com sucesso!');
        // Imprime uma mensagem de sucesso caso a conexão seja estabelecida.

        return mongoClient;
        // Retorna o cliente MongoDB para que possa ser utilizado em outras partes da aplicação.
    } catch (erro) {
        console.error('Falha na conexão com o banco!', erro);
        // Se ocorrer algum erro durante a conexão, captura o erro e imprime uma mensagem de erro no console.
        process.exit();
        // Encerra a aplicação caso ocorra um erro na conexão com o banco de dados.
    }
}