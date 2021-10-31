import { fromDTO, toDTO } from '../modelos/Servicios.js'

async function obtenerServicio(daoServicios, id) {
    const servicio = fromDTO(await daoServicios.buscar(Number(id)))

    

    //await daoPersonas.guardar(toDTO(persona))
    return servicio
}

export { obtenerServicio }