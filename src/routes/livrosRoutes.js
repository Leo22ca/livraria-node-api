import express  from "express";
import LivroController from "../controllers/livrosController.js";

const livrosRouter = express.Router();

livrosRouter
    .get("/livros", LivroController.retornarLivros)
    .get("/livros/:id", LivroController.retornarLivro)
    .post("/livros", LivroController.cadastrarLivro)
    .put("/livros/:id", LivroController.atualizarLivro)
    .delete("/livros/:id", LivroController.removerLivro)

export default livrosRouter;