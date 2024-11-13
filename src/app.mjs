import express from "express";
import { connectDb } from "./config/dbConfig.mjs";
import superHeroRoutes from "./routes/superHeroRoutes.mjs";
import { handleErrors } from "./middlewares/errorMiddleware.mjs";
import dotenv from "dotenv";

// Cargar variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDb();

//Middleware para parsear JSON
app.use(express.json());

// Routes de superhéroes
app.use("/api", superHeroRoutes);

// Manejo de errores para rutas no encontradas
app.use((req, res) => {
  res.status(404).send({ mensaje: "Ruta no encontrada" });
});

// Middleware para manejo de errores
app.use(handleErrors);

// Inciar el servidor
app.listen(PORT, () => {
  console.log("Servidor escuchando en el puerto", PORT);
});
