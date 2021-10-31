import { fromDTO, toDTO } from '../modelos/Servicios.js'

async function eliminarServicio(daoServicios, id) {
    const servicio = fromDTO(await daoServicios.buscar(Number(id)))

    
    await daoServicios.eliminar(toDTO(servicio))
    return servicio
}

export { eliminarServicio }