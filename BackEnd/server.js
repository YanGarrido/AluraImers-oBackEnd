// Importa a biblioteca Express para criar o servidor web.
import express from "express"; 
import routes from "./src/routes/postsRoutes.js";


const app = express(); // Cria uma instância do Express, que será o nosso servidor web.
app.use(express.static("uploads"));
routes(app);

app.listen(3000, () => { // Inicia o servidor na porta 3000 e exibe uma mensagem no console.
  console.log("Servidor escutando...");
});





