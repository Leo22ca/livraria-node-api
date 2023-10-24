import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js";

db.on("erro", console.log.bind(console, 'Erro de conexão com o DB'));
db.once("open", () => {
    console.log("Aplicação conectada ao banco");
})

const app = express ();
app.use(express.json());
routes(app);

export default app;