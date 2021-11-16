import { obtenerCsvServicio } from '../src/casosDeUso/obtenerCsvServicio.js'
import { getDaoSer, getDaoUsr} from '../src/daos/DaoFactory.js'
import { crearServicio } from '../src/casosDeUso/crearServicio.js'

const daoServicios = getDaoSer()

const servicio = await crearServicio(daoServicios, "titulo22", "descrpt2222", 22222, "barrio2", "rubro2")

if(!servicio){
    console.log('servicio no encontrado')
}else{
    const datos = {
        nombre: servicio.titulo,
        ubicacion: servicio.barrio
    }
    try{
        await obtenerCsvServicio(datos)
        console.log('done')
    }catch(error){
        console.log(error)
    }
}
