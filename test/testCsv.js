import { obtenerCsvServicio } from '../src/casosDeUso/obtenerCsvServicio.js'
import { getDaoSer, getDaoUsr} from '../src/daos/DaoFactory.js'
import { obtenerServicio } from '../src/casosDeUso/obtenerServicio.js'
import { crearUsuario } from '../src/casosDeUso/crearUsuario.js'


const daoServicios = getDaoSer()
const daoUsuarios = getDaoUsr()

const persona = await crearUsuario(daoUsuarios, "brian111", "saban", "briansaban", "pass1234", "orty.service@gmail.com", 1)

if(!persona){
    console.log('Persona no encontrada')
}else{
    const servicio = await obtenerServicio(daoServicios, persona.id)
    

    if(!servicio){
        console.log('servicio no encontrado')
    }else{
        const datos = {
            nombre: servicio.nombre,
            ubicacion: servicio.ubicacion
        }
        try{
            await obtenerCsvServicio(datos)
            console.log('done')
        }catch(error){
            console.log(error)
        }
    }
}