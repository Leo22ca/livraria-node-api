import livros from "../models/livro.js";

class LivroController {

    static retornarLivros = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros);
        });
    }

    static retornarLivro = (req, res) => {
        let {id} = req.params; 

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `Livro não encontrado - ${err.message}`});
            } else {
                res.status(200).send(livros);
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `Não foi possível cadastrar o livro - ${err.message}`});
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = (req, res) => {
        let livroId = req.params.id;

        livros.findByIdAndUpdate(livroId, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: `Não foi possível atualizar o livro - ${err.message}`});
            }
        })
    }

    static removerLivro = (req, res) => {
        let livroId = req.params.id;
        
        livros.findByIdAndDelete(livroId, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro removido com sucesso!'})
            } else {
                res.status(500).send({message: `Não foi possível remover o livro - ${err.message}`});
            }
        })
    }

}

export default LivroController;