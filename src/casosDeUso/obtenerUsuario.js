import { fromDTO, toDTO } from '../modelos/Usuario.js'

async function obtenerUsuario(daoPersonas, id) {
    const usuario = fromDTO(await daoPersonas.buscar(Number(id)))

    

    //await daoPersonas.guardar(toDTO(persona))
    return usuario
}

export { obtenerUsuario }