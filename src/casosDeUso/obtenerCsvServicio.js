import {getEscritor} from './escritorCSV/index.js'

const e = getEscritor()

export async function obtenerCsvServicio(daoServicios, id){
    servicio = daoServicios.buscar(id)
    datos = {nombre: servicio.nombre, ubicacion:servicio.ubicacion}
    const csv = await e.create(datos)
}
