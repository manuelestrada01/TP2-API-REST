import usuariosModels from "../models/usuarios.models.js";

const getAllUsers = async () => {
    return await usuariosModels.getAllUsers();
}

const postUsuarios = async (nuevoUsuario) => {
    return await usuariosModels.postUsuarios(nuevoUsuario);
}

const updateUsuarios = async (id, datosActualizados) => {
    return await usuariosModels.updateUsuarios(id, datosActualizados);
}

export default {
    getAllUsers,
    postUsuarios,
    updateUsuarios
};
