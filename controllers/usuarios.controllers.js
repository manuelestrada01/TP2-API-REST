import usuariosServices from "../services/usuarios.services.js";

const getAllUsers = async (req, res) => {
    try {
        const usuarios = await usuariosServices.getAllUsers();
        res.status(200).send(usuarios);
    } catch (error) {
        res.status(500).send({ message: "Error fetching users" });
    }
};

const postUsuarios = async (req, res) => {
    try {
        const nuevoUsuario = await usuariosServices.postUsuarios(req.body);
        res.status(201).send(nuevoUsuario);
    } catch (error) {
        res.status(500).send({ message: "Error creating user" });
    }
};

const updateUsuarios = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const updatedUsuario = await usuariosServices.updateUsuarios(id, req.body);
        if (updatedUsuario) {
            res.status(200).send(updatedUsuario);
        } else {
            res.status(404).send({ message: "User not found" });
        }
    } catch (error) {
        res.status(500).send({ message: "Error updating user" });
    }
};

export default {
    getAllUsers,
    postUsuarios,
    updateUsuarios
};
