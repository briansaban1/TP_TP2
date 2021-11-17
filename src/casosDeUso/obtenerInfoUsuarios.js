import {getInformadorDeUsuarios} from '../InformadorUsuarios/index.js'

const idu = getInformadorDeUsuarios()

export async function obtenerInfoUsuarios(){
    const info = await idu.getInfo()
    
    return info.results[0]
    
}