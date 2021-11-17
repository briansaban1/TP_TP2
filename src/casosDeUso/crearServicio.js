import Servicios, { toDTO } from '../modelos/Servicios.js'
import { obtenerCsvServicio } from '../../src/casosDeUso/obtenerCsvServicio.js'


async function crearServicio(daoServicios, titulo, descripcion, telefono, barrio, rubro) {
    const id = Servicios.nextId()
    const servicio = new Servicios(id, titulo, descripcion, telefono, barrio, rubro)
    await daoServicios.guardar(toDTO(servicio))
    
    if(!servicio){
        console.log('servicio no encontrado')
    }else{
        const datos = [{
            titulo: titulo,
            ubicacion: barrio,
            rubro: rubro
        }]
        try{
            await obtenerCsvServicio(datos)
            console.log('done')
        }catch(error){
            console.log(error)
        }
    }


    return servicio
}

export { crearServicio }