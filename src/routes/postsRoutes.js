import express from "express"; // Importa o framework Express para criar a aplicação web
import multer from "multer"; // Importa o Multer para lidar com uploads de arquivos
import cors from "cors"; // Importa o CORS para lidar com solicitações de diferentes origens//Habilitar comunicação com o Front
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsControllers.js"; // Importa as funções controladoras para lidar com a lógica dos posts

const cors = {
  origin: "http://localhost:8000", // Define a origem permitida para solicitações CORS//Habilitar comunicação com o endereço Front
  optionsSuccessStatus: 200 // Define o status de sucesso para solicitações CORS
}
// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

// Cria uma instância do middleware Multer
const upload = multer({ storage: storage });
//const upload = multer({ dest: "./uploads", storage});

// Define as rotas usando o objeto Express app
const routes = (app) => {
  // Permite que o servidor interprete corpos de requisições no formato JSON
  app.use(express.json());

  app.use(cors(corsOptions)); // Habilita o CORS para permitir solicitações de diferentes origens/Habilitar comunicação com o Front

  // Rota para recuperar uma lista de todos os posts
  app.get("/posts", listarPosts); // Chama a função controladora apropriada

  // Rota para criar um novo post
  app.post("/posts", postarNovoPost); // Chama a função controladora para criação de posts

  // Rota para upload de imagens (assumindo uma única imagem chamada "imagem")
  app.post("/upload", upload.single("imagem"), uploadImagem); // Chama a função controladora para processamento da imagem

  app.put("/upload/:id", atualizarNovoPost);
};

export default routes;