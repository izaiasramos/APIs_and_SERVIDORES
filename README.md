Uma imersão da alura para desvendar o uso de APIs e SERVIDORES, um projeto back_and

Resumo Detalhado do Código JavaScript com Express.js

Introdução
O código estabelece as bases para uma simples API (Interface de Programação de Aplicativos) utilizando o framework Node.js Express.js. Essa API serve como um ponto de acesso a uma coleção de "posts" (que podem ser entendidos como publicações em um blog, por exemplo) e permite que você faça requisições para obter informações sobre esses posts.

- Importação do Express.js
JavaScript

#import express from "express"; 


Express.js: É um framework minimalista e flexível para Node.js que facilita a criação de servidores web e APIs.

Import: Essa linha importa o módulo Express.js para o seu projeto, permitindo que você utilize suas funcionalidades.

- Dados Mockados
JavaScript

#const posts = [...]

Dados Mockados: São dados fictícios que simulam os dados reais que a sua aplicação teria. Neste caso, o array posts contém objetos que representam cada postagem, com propriedades como id, descricao, imagem, video, etc.
Estrutura dos Objetos: Cada objeto dentro do array posts representa uma postagem e possui propriedades que descrevem essa postagem (por exemplo, o ID único, a descrição, a URL da imagem, etc.).

- Criação da Aplicação Express
JavaScript

#const app = express();

Instância do Express: Cria uma nova instância do Express, que será o núcleo da sua aplicação.

- Middleware JSON
JavaScript

#app.use(express.json());

Middleware: É uma função que tem acesso ao objeto request e response, e pode modificar ambos.
express.json(): Esse middleware transforma o corpo das requisições que contêm JSON em objetos JavaScript, facilitando o trabalho com dados estruturados.

- Iniciar o Servidor
JavaScript

#app.listen(3001, () => {
    console.log("Servidor ecutando...");
 });


app.listen(): Inicia o servidor Express na porta 3001. Quando o servidor estiver ouvindo nessa porta, o callback será executado, imprimindo uma mensagem no console.

- Rotas
Rota Raiz (/):
JavaScript

#app.get("/", (req, res) =>  {
    res.status(200).send("Bem vindo a minha API");
});

Responde à requisição GET na raiz da API com uma mensagem de boas-vindas.

- Rota dos Posts (/posts):
JavaScript

#app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

Responde à requisição GET em /posts com todos os posts armazenados no array posts.

- Rota de um Post Específico (/posts/:id):
JavaScript

#app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorID(req.params.id);
    res.status(200).json(posts[index]);
});

:id: É um parâmetro de rota que captura o ID do post na URL.

buscarPostPorID(): Função auxiliar que busca o índice do post com o ID correspondente no array posts.
Responde à requisição GET em /posts/:id com o post específico cujo ID foi fornecido na URL.

Função buscarPostPorID(id) e Rota Associada:

- Função buscarPostPorID(id)
A função buscarPostPorID(id) é responsável por encontrar o índice de um post específico dentro do array posts.

Vamos entender a função passo a passo:

Parâmetro id: A função recebe um parâmetro chamado id que representa o identificador único do post que queremos encontrar.
posts.findIndex((post) => {...}):
posts: É o array que contém todos os objetos representando os posts.
findIndex: É um método de arrays do JavaScript que percorre cada elemento do array e executa uma função de callback.
Função callback: A função de callback é passada como argumento para o findIndex. Ela recebe um elemento do array (post) como parâmetro e retorna true ou false.

Condição post.id === Number(id):
post.id: Acessa a propriedade id do objeto post (representando um post individual).
Number(id): Converte o parâmetro id (que pode ser uma string) para um número, pois é provável que o ID seja armazenado como um número inteiro.
===: Operador de comparação estrita para verificar se o ID do post é igual ao ID fornecido na função.
return posts.findIndex(...):
O findIndex retorna o índice do primeiro elemento do array onde a função de callback retorna true.
Se nenhum elemento atender à condição (nenhum post com o ID fornecido for encontrado), o findIndex retorna -1.

Rota Associada: app.get("/posts/:id")
A rota app.get("/posts/:id") é responsável por lidar com requisições GET que buscam um post específico através do seu ID.

Vamos entender como a rota e a função trabalham juntas:

Padrão da rota: /posts/:id
/posts: É a parte fixa da rota que indica que a requisição está relacionada aos posts.
:id: É um parâmetro dinâmico da rota que captura o ID do post fornecido na URL.

Callback da rota ((req, res) => {...})
req (request): Objeto que contém informações sobre a requisição, incluindo o parâmetro id capturado na URL.
res (response): Objeto usado para enviar uma resposta ao cliente.
const index = buscarPostPorID(req.params.id);:
req.params.id: Acessa o valor do parâmetro id capturado na URL.
buscarPostPorID(req.params.id): Chama a função buscarPostPorID passando o ID extraído da URL como argumento. Essa função retorna o índice do post correspondente ou -1 se não encontrar o post.
res.status(200).json(posts[index]);:
Verifica o índice:
Se index for diferente de -1 (o post foi encontrado), a rota:
Define o status da resposta HTTP como 200 (OK).
Envia o post correspondente ao índice encontrado (posts[index]) no formato JSON como resposta.

A função buscarPostPorID é uma ferramenta auxiliar para a rota /posts/:id. A função localiza o índice do post desejado no array, e a rota utiliza esse índice para enviar o post correspondente como resposta.

Explicação Simples
Imagine que você criou um pequeno blog. O código acima cria um servidor que permite que você acesse os posts desse blog através de um navegador ou de outras aplicações.

Acessando todos os posts: Se você digitar o endereço do seu servidor seguido de "/posts" no navegador, ele te mostrará uma lista com todos os posts que você criou.
Acessando um post específico: Se você adicionar um número após "/posts/", como "/posts/2", ele te mostrará apenas o post com o ID 2.
Em resumo:

Esse código demonstra como criar uma API básica com o Express.js para gerenciar uma coleção de dados (no caso, os posts). É uma base sólida para construir aplicações mais complexas que se comunicam com um servidor.

Conceitos importantes:

Rotas: São os endereços (URLs) que você pode acessar na sua aplicação.
Requisições: São as solicitações feitas ao servidor (por exemplo, GET para obter dados).
Respostas: São as respostas do servidor às requisições (por exemplo, uma lista de posts).
JSON: É um formato de troca de dados leve e fácil de ler.
Middleware: São funções que podem interceptar as requisições e as respostas, permitindo adicionar funcionalidades como autenticação, validação de dados, etc.
Próximos passos:

Banco de dados: Para aplicações maiores, você pode usar um banco de dados para armazenar os posts de forma persistente.
Autenticação: Para proteger sua API, você pode implementar mecanismos de autenticação para permitir o acesso apenas a usuários autorizados.
Validação de dados: Você pode adicionar validação para garantir que os dados recebidos nas requisições estejam no formato correto.

a aula 3 começamos instalando a comunicação com o banco de dados mongodb atlas em nuvem: npm install mongodb

isso vai me dar a posibilidade de acesso ao banco de dados.

agora fazemos a  conexão com o banco de dados:

antes fomos no mongodb atlas e criamos um banco de dados: 
imersao-instabytes e uma collection: posts

assim agora já temos um database e uma tabela criada.

la nos criamos dois registros na tabela posts, que seria os dois primeiros dados mokados que criamos na aula 2.

//dados Mokados:
const posts = [
    {
      id: 1, 
      descricao: "Uma foto de teste",
      imagem: "https://picsum.photos/200/300",
    },
    {
      id: 2, 
      descricao: "Vídeo incrível da natureza!  #natureza #paz",
      video: "https://player.vimeo.com/video/123456789",
      data: new Date(2023, 11, 25),
      autor: "João Silva"
    }
]

agora que já temos o database, a tabela e seus registros, temos a string de conexão com o banco de dados, agora vamos efetivamente conectar com o banco de dados:

Vamos criar um arquivo chamado .env para criar uma variável de ambiente(isso quer dizer que ela vai existir somente dentro do nosso ambiente, ficará inacessivel externamente, ou seja, não vai subir para o github por exemplo) lá faremos a conexão com o banco de dados.

//o padrão dessas variáveis de ambiente é o nome da variável em maiúsculo separados por underline

STRING_CONEXAO = mongodb+srv://izaiasramos:Adoroestudar1!@cluster0.sf0s1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0


package.json - em package.json adicionamos comandos ao script:

  "scripts": {
    "dev": "node --watch(ou nodemon) --env-file=.env server.js",
    "test": ""
  },
  isso diz ao node para executar os seguintes comandos:
   --wathc ou nodemon se estiver instalado vai ficar escutando as mudanças que acontecem no arquivo server.js e vai reiniciar o servidor automaticamente.
   --env-file=.env vai carregar as variaveis de ambiente do arquivo .env
   server.js é o arquivo que contém o código do servidor.

AGORA PARA INICIAR O SERVIDOR: npm run dev

AULA 3: Conectando sua API ao MongoDB: Estrutura, Conexão e Refatoração-

- dbConfig.js - foi criado arquivo na models fazendo a conexão com o DB,
- postsControllers.js - controllers para lidar com as requisições e respostas das rotas, como os posts da rota posts.
- postsRoutes.js - e um arquivo na pasta routes com uma função routes que recebe o app do express para usar em todos os arquivos que precisarem e principalmente é aonde é definido as rotas

foi criado o arquivo .env - Atribui uma string de conexão do MongoDB a uma variável. Essa string contém as informações necessárias para conectar seu aplicativo a um banco de dados MongoDB específico, como o endereço do banco, as credenciais de acesso e outras configurações.
 Um arquivo .env é utilizado para armazenar de forma segura variáveis de ambiente, como a string de conexão do banco de dados. Isso evita que informações sensíveis sejam expostas diretamente no código e facilita a gestão de diferentes ambientes de desenvolvimento.

AULA 4 - Implementando Armazenamento e Upload de Imagens

Os quatro principais verbos HTTP usados pelo Express são:

GET - PEGA DADOS, USADO PARA REQUISIÇÕES DE RECUPERAÇÃO DE DADOS

Recupera informações de um recurso, como dados ou páginas, sem alterar o servidor (ex.: consultar posts).

POST - CRIA DADOS

Envia dados para criar um novo recurso no servidor (ex.: cadastrar um usuário).

PUT - ATUALIZA DADOS

Atualiza completamente um recurso existente no servidor (ex.: substituir dados de um post).

DELETE - REMOVE DADOS

Remove um recurso existente do servidor (ex.: deletar um comentário).
Esses verbos são fundamentais para a arquitetura REST e são usados no Express para definir rotas específicas para cada operação.

body - toda requisição que chega ao servidor, tem um corpo, que é o conteúdo que está sendo enviado pelo cliente.

Para postar um novo post, usamos a extensão Thunder Client para postar apenas caractheres, que é uma extensão do VSCode que facilita o teste de APIs.
E permite no caso que eu insira registros no DB.

Thunder Client é uma extensão do Visual Studio Code que permite testar APIs RESTful de forma fácil e eficiente. Ela oferece uma interface intuitiva para enviar solicitações HTTP, visualizar respostas e gerenciar cabeçalhos.
A extensão Thunder Client é uma ferramenta útil para desenvolvedores que trabalham com APIs, pois permite testar rapidamente as rotas e verificar se as respostas estão conforme o esperado.

Multer - é uma biblioteca que permite a manipulação de arquivos enviados em requisições HTTP. Ela é frequentemente usada em conjunto com o Express para lidar com uploads de arquivos.

devemos insta-la no projeto: npm install multer
 
postman - é uma ferramenta de teste de API que permite enviar solicitações HTTP e visualizar as respostas. É útil para testar APIs e verificar se as respostas estão conforme o esperado.

Usamos o postman para enviar uma imagem real para o servidor e salvar no banco de dados.

AULA 5 - Publicando na Google Cloud: Configuração de API e Integração com Gemini

 .env :Aqui crio variáveis de ambiente para o projeto

 - No .env criamos uma variável de ambiente chamada GEMINI_API_KEY e atribuímos a ela a chave da API do Gemini. é ela que nos dará conexão com a API do Gemini.

//chave da api do google gemini
GEMINI_API_KEY = AIzaSyBOkdyVKhvlYhJQsfay9LicXr3RI5PYGeI

- SERVICES/geminiServices.js - arquivo que contém a função gerarDescricaoComGemini que é responsável por gerar uma descrição de uma imagem usando a API do Gemini.
  Aqui foi inserido o código para gerar uma descrição de uma imagem usando a API do Gemini. Esse codigo foi copia e cola apenas porque é o padrão do Gemini para usar sua api, a unica coisa qque alteramos foi o prompt para dizer ao gemini que ele deve gerar uma descrição de acordo com a imagem.

- CONTROLLERS/postsController.js - aqui foi importado a função da api criada no geminiServices.js 
// Importa o módulo do sistema de arquivos para manipular arquivos
import fs from "fs";  
// importa a função gerarDescricaoComGemini do arquivo geminiServices.js
import gerarDescricaoComGemini from "../services/geminiServices.js";

 // Alteramos o try da função createPost para incluir a geração de descrição da imagem usando a API do Gemini
    try {
        // Gera um novo nome para a imagem usando o ID do post criado
        const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
        const descricao = await gerarDescricaoComGemini(imgBuffer);
        //montar um objeto com os dados do novo post que vem pela requisição
        const post = {
            Url: urlImagem,
            descricao: descricao,
            alt: req.body.alt
        };
        ...
    }
criado a função gerarDescricaoComGemini que é responsável por gerar uma descrição de uma imagem usando a API do Gemini.

INSTALAR AS DEPENDENCIAS DO  GEMINI - Para dar certo temos que baixar as dependencias do gemini:

npm i @google/generative-ai
