import Usuario, { toDTO } from '../modelos/Usuario.js'

async function crearUsuario(daoPersonas, nombre, apellido, usuario, password, email, tipo) {
    const id = Usuario.nextId()
    const persona = new Usuario(id, nombre, apellido, usuario, password, email, tipo)
    await daoPersonas.guardar(toDTO(persona))
    return persona
}

export { crearUsuario }