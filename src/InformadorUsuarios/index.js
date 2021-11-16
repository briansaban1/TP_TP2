import InformadorDeUsuarios from "./informadorDeUsuarios.js";

// Importo la clase InformadorDeUsuarios y creo el objeto instanciado de su clase y exporto la función que lo devuelve

const idu = new InformadorDeUsuarios()

export function getInformadorDeUsuarios(){
    return idu
}