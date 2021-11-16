import {getInformadorDeUsuarios} from '../InformadorUsuarios/index.js'

const idu = getInformadorDeUsuarios()
// Creo el objeto

//Creo y exporto la función obtenerInfoUsuarios(), la cual va a utilizar la función de la Clase InformadorDeUsuarios
export async function obtenerInfoUsuarios(){
    const info = await idu.getInfo()
    console.log(info.results[0])
    // Imprimo el objeto con todos sus atributos (algunos son de tipo objeto)
}