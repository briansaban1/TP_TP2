import { fromDTO, toDTO } from '../modelos/Usuario.js'

async function eliminarUsuario(daoPersonas, id) {
    const usuario = fromDTO(await daoPersonas.buscar(Number(id)))

    
    await daoPersonas.eliminar(toDTO(usuario))
    return usuario
}

export { eliminarUsuario }