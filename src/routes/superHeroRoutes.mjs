import express from "express";
import {
  obtenerSuperheroePorIdController,
  obtenerTodosLosSuperheroesController,
  buscarSuperheroePorAtributoController,
  obtenerSuperheroesMayoresDe30Controller,
  agregarNuevoSuperheroeController,
  actualizarSuperheroePorIdController,
  eliminarSuperheroePorIdController,
} from "../controllers/superheroController.mjs";
import {
  registerSuperHeroValidationRules,
  updateSuperHeroValidationRules,
} from "../validations/superHeroValidationRules.mjs";
import { handleValidationErrors } from "../middlewares/errorMiddleware.mjs";

const router = express.Router();

router.get("/heroes", obtenerTodosLosSuperheroesController);
router.get("/heroes/mayores-30", obtenerSuperheroesMayoresDe30Controller);
router.get("/heroes/:id", obtenerSuperheroePorIdController);
router.get("/heroes/buscar/:atributo/:valor", buscarSuperheroePorAtributoController);
router.post(
  "/heroes",
  registerSuperHeroValidationRules,
  handleValidationErrors,
  agregarNuevoSuperheroeController
);
router.put(
  "/heroes/:id",
  updateSuperHeroValidationRules,
  handleValidationErrors,
  actualizarSuperheroePorIdController
);
router.delete("/heroes/:id", eliminarSuperheroePorIdController);

export default router;
