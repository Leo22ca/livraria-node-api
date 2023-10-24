import mongoose from "mongoose";
import 'dotenv/config';

mongoose.connect(process.env.DB_CONNECTION);

let db = mongoose.connection;

export default db;