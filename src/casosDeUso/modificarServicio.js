import { fromDTO, toDTO } from '../modelos/Servicios.js'

async function modificarServicio(daoServicios, id, campo, nuevoValor) {
    const servicio = fromDTO(await daoServicios.buscar(Number(id)))

    switch (campo) {
        case 'titulo':
            servicio.setTitulo(nuevoValor)
            break
        case 'descripcion':
            servicio.setDescripcion(nuevoValor)
            break
        case 'telefono ':
            servicio.setTelefono(nuevoValor)
            break
        case 'barrio':
            servicio.setBarrio(nuevoValor)
            break
        case 'rubro':
            servicio.setRubro(nuevoValor)
            break
        
        default:
            throw new Error(`no existe el campo ${campo} en persona`)
    }

    await daoServicios.guardar(toDTO(servicio))
    return servicio
}

export { modificarServicio }