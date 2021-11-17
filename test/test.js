import { modificarUsuario } from '../src/casosDeUso/modificarUsuario.js'
import { crearUsuario } from '../src/casosDeUso/crearUsuario.js'
import {obtenerUsuario} from '../src/casosDeUso/obtenerUsuario.js'
import {eliminarUsuario} from '../src/casosDeUso/eliminarUsuario.js'

import { crearServicio } from '../src/casosDeUso/crearServicio.js'
import { eliminarServicio } from '../src/casosDeUso/eliminarServicio.js'
import { modificarServicio } from '../src/casosDeUso/modificarServicio.js'
import { obtenerServicio } from '../src/casosDeUso/obtenerServicio.js'
import { obtenerInfoUsuarios } from "../src/casosDeUso/obtenerInfoUsuarios.js";



import { getDaoUsr, getDaoSer } from '../src/daos/DaoFactory.js'

const daoUsuarios = getDaoUsr()
const daoServicios = getDaoSer()

try {

    //USUARIO

    //se crea un usuario
    const persona1 = await crearUsuario(daoUsuarios, "brian111", "saban", "briansaban", "pass1234", "orty.service@gmail.com", 1)
    const persona2 = await crearUsuario(daoUsuarios, "brian222", "saban", "briansaban", "pass1234", "test@test.com", 1)
    const persona3 = await crearUsuario(daoUsuarios, "brian333", "saban", "briansaban", "pass1234", "test@test.com", 1)
    console.log(persona1, persona2, persona3)

    // se modifica un usuario
    const modificada = await modificarUsuario(daoUsuarios, persona2.id, 'usuario', 'usrmodificado')
    console.log(modificada)

    //se obtiene un usuario
    const obtener = await obtenerUsuario(daoUsuarios, persona3.id)
    console.log(obtener)

    //se elimina un usuario
    const eliminar = await eliminarUsuario(daoUsuarios, persona1.id)
    console.log(eliminar)


    //USUARIO POR API

    let result = await obtenerInfoUsuarios()
    console.log("------ TRAIGO INFO DE UNA API -------")
    console.log("result", result);
    const personaApi = await crearUsuario(daoUsuarios, result.name.first, result.name.last, result.login.username, result.login.password, result.email, 1)
    console.log("------ CREO PERSONA CON LA INFO OBTENIDA -------")
    console.log("Persona", personaApi);

    //


    //SERVICIOS

    //se crea un servicio
    const servicio1 = await crearServicio(daoServicios, "titulo11", "descrpt111", 12323, "barrio1", "rubro1")
    const servicio2 = await crearServicio(daoServicios, "titulo22", "descrpt2222", 22222, "barrio2", "rubro2")

    console.log(servicio1, servicio2)

    // se modifica un servicio
    const modificarSer = await modificarServicio(daoServicios, servicio1.id, 'titulo', 'TituloModificado')
    console.log(modificarSer)

    //se obtiene un servicio
    const obtenerServ = await obtenerServicio(daoServicios, persona1.id)
    console.log(obtenerServ)

    //se elimina un servicio
    const eliminarServ = await eliminarServicio(daoServicios, servicio2.id)
    console.log(eliminarServ)


} catch (error) {
    console.log(error)

}
