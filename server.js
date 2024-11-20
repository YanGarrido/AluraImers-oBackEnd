import express from "express";

const posts = [
  {
    id: 1,
    descricao: "Uma foto teste",
    imagem: "http://placecats.com/millie/300/150"
  },
  {
    id: 2,
    descricao: "Paisagem deslumbrante!",
    imagem: "http://placeimg.com/640/480/nature"
  },
  {
    id: 3,
    descricao: "Meu pet é muito fofo!",
    imagem: "https://picsum.photos/id/237/200/300"
  },
  {
    id: 4,
    descricao: "Citação inspiradora do dia",
    imagem: "http://lorempixel.com/400/200/city"
  },
  {
    id: 5,
    descricao: "Receita deliciosa de bolo de chocolate",
    imagem: "https://source.unsplash.com/random/400x300/?food"
  },
  {
    id: 6,
    descricao: "Gráfico de dados interessante",
    imagem: "https://www.chartjs.org/samples/latest/utils/randomScalingFactor.js"
  }
];

const app = express()
app.use(express.json())

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorID(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id)
  })
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorID(req.params.id)
  res.status(200).json(posts[index]);
});