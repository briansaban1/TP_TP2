import { obtenerInfoUsuarios } from "../src/casosDeUso/obtenerInfoUsuarios.js";
import { crearUsuario } from '../src/casosDeUso/crearUsuario.js'

import { getDaoUsr } from '../src/daos/DaoFactory.js'


const daoUsuarios = getDaoUsr()

let result = await obtenerInfoUsuarios()
console.log("------ TRAIGO INFO DE UNA API -------")
console.log("result", result);
const persona1 = await crearUsuario(daoUsuarios, result.name.first, result.name.last, result.login.username, result.login.password, result.email, 1)
console.log("------ CREO PERSONA CON LA INFO OBTENIDA -------")
console.log("Persona", persona1);