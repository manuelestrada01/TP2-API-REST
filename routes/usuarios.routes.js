import usuariosControllers from "../controllers/usuarios.controllers.js";
import express from "express";

const router = express.Router();


router.get("/usuarios", usuariosControllers.getAllUsers);      
router.post("/usuarios", usuariosControllers.postUsuarios);    
router.patch("/usuarios/:id", usuariosControllers.updateUsuarios);
export default router;
