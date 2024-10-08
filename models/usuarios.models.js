const usuarios = [
    { id: 1, nombre: "valen", edad: 20 },
    { id: 2, nombre: "shar", edad: 21 },
    { id: 3, nombre: "juan", edad: 29 },
    { id: 4, nombre: "manu", edad: 24 }
];

const getAllUsers = async () => {
    return await usuarios;
}

const postUsuarios = async (nuevoUsuario) => {
    nuevoUsuario.id = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
    usuarios.push(nuevoUsuario); 
    return nuevoUsuario;
}

const updateUsuarios = async (id, datosActualizados) => {
    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
        usuarios[index] = { ...usuarios[index], ...datosActualizados };
        return usuarios[index];
    }
    return null;
}

export default {
    getAllUsers,
    postUsuarios,
    updateUsuarios
};
