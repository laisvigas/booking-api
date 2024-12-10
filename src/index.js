import "dotenv/config";
import express from "express";
import cors from "cors";

const servidor = express();

servidor.use(cors({ origin: "*" }));

servidor.use(express.json());



// TODO routes ...



servidor.listen(3000, () => {
    console.log("Servidor em execução.");
});