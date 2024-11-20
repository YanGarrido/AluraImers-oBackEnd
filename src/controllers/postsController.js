import getTodosPosts from "../models/postsModel.js";

export async function listarPosts(req, res) {
  const posts = await getTodosPosts(); // Chama a função para buscar os posts.
  res.status(200).json(posts); // Envia os posts como resposta em formato JSON com o status 200 (sucesso).
}

