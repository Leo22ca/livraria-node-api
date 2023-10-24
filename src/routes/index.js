import express from "express";
import livrosRouter from "./livrosRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Livraria"})
    })

    app.use(
        express.json(),
        livrosRouter
    )
}

export default routes;