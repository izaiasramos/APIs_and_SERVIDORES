//importa o express
import express from "express";
//importa a constante routes do arquivo postsRoutes.js
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
//     }
//   ];




//atribui tudo oque o express pode fazer para a variavel app, criado uma instancia de express
const app = express();
//puxa a função routes e o app express, routes(app): Chama a função routes que foi importada, passando a instância do Express como argumento. Essa função define todas as rotas da aplicação, como /posts, /posts/:id, etc.
routes(app)

//subir o servidor, Inicia o servidor Express na porta 3001. Quando o servidor estiver ouvindo nessa porta, o callback será executado, imprimindo uma mensagem no console.
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