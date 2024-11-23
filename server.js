//importa o express
import express from "express";
import routes from "./src/routes/postsRoutes.js";

//dados Mokados:
// const posts = [
//     {
//       id: 1, 
//       descricao: "Uma foto de teste",
//       imagem: "https://picsum.photos/200/300",
//     },
//     {
//       id: 2, 
//       descricao: "Vídeo incrível da natureza!  #natureza #paz",
//       video: "https://player.vimeo.com/video/123456789",
//       data: new Date(2023, 11, 25),
//       autor: "João Silva"
//     },
//     {
//       id: 3, 
//       descricao: "GIF animado super divertido! ",
//       gif: "https://media.giphy.com/media/3o7aCSPqXE5C6T8/giphy.gif",
//       categoria: "Humor"
//     },
//     {
//       id: 4,
//       descricao: "Uma receita deliciosa de bolo de chocolate!  #bolodechocolate #receita",
//       imagem: "https://www.example.com/bolo-de-chocolate.jpg",
//       data: new Date(2023, 11, 27),
//       autor: "Maria Oliveira",
//       comentarios: 20
//     },
//     {
//       id: 5, 
//       descricao: "Texto inspirador sobre a vida. ❤️ #motivação #positividade",
//       texto: "A vida é uma jornada incrível...",
//       data: new Date(2023, 11, 28)
//     },
//     {
//       id: 6, 
//       descricao: "Uma foto da minha viagem para Paris!  #Paris #viagem",
//       imagem: "https://www.example.com/paris.jpg",
//       local: "Paris, França"
//     }
//   ];

//atribui tudo oque o express pode fazer para a variavel app
const app = express();
routes(app)

//subir o servidor
app.listen(3001, () => {
    console.log("Servidor escutando...");
    // res.send("Servidor rodando na porta 3000");
});







// function buscarPostPorID(id){//busca o post pelo id
//     return posts.findIndex((post) => {
//         return post.id === Number(id);//transforma o id em numero
//     });
// }
// app.get("/posts/:id", (req, res) => {
//     const index = buscarPostPorID(req.params.id);
//     res.status(200).json(posts[index]);
// });