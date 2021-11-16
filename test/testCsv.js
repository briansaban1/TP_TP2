import { obtenerCsvServicio } from './src/casoDeUso/obtenerCsvServicio.js'
import { getDaoSer } from '../src/dos/DaoFactory.js'
import { obtenerServicio } from '../src/casosDeUso/obtenerServicio.js'

const daoServicios = getDaoUsr()
const servicio = await obtenerServicio(daoServicios, persona1.id)
const datos = {
    nombre: servicio.nombre,
    ubicacion: servicio.ubicacion
}
try{
    await escritor.create(records)
    console.log('done')
}catch(error){
    console.log(error)
}