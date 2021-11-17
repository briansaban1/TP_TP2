import { fromDTO, toDTO } from '../modelos/Usuario.js'

async function modificarUsuario(daoPersonas, id, campo, nuevoValor) {
    const usuario = fromDTO(await daoPersonas.buscar(Number(id)))

    switch (campo) {
        case 'apellido':
            usuario.setApellido(nuevoValor)
            break
        case 'nombre':
            usuario.setNombre(nuevoValor)
            break
        case 'usuario':
            usuario.setUsuario(nuevoValor)
            break
        case 'password':
            usuario.setPassword(nuevoValor)
            break
        case 'email':
            usuario.setEmail(nuevoValor)
            break
        case 'tipo':
            usuario.setTipo(nuevoValor)
            break
        default:
            throw new Error(`no existe el campo ${campo} en usuario`)
    }

    await daoPersonas.guardar(toDTO(usuario))
    return usuario
}

export { modificarUsuario }