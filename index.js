
import express from "express";
import usuariosRoutes from "./routes/usuarios.routes.js";

const PORT = 8080;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", usuariosRoutes);

app.listen(PORT, () => {
    console.log("server running on port " + PORT);
});
app.on("error", (err) => {
    console.log("ha ocurrido un error", err);
});
