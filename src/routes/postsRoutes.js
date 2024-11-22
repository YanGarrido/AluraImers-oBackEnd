import express from "express"
import multer from "multer";
import { listarPosts, postaNovoPost, uploadImagem } from "../controllers/postsController.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
})

const upload = multer({ dest: "./uploads", storage })

const routes = (app) => {
  // Habilita o middleware para analisar o corpo das requisições JSON.
  app.use(express.json());
  // Rota para obter todos os posts.
  app.get("/posts", listarPosts);
  // Rota para criar um post
  app.post("/posts", postaNovoPost)
  app.post("/upload", upload.single("imagem"), uploadImagem)
}

export default routes;
