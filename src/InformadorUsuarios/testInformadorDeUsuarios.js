import { getInformadorDeUsuarios } from "./index.js";
// Importo el método getInformadorDeUsuarios del Index que devuelve un objeto de tipo InformadorDeUsuarios
const idu = getInformadorDeUsuarios()

try {
    const info = await idu.getInfo() // Utilizo el método de la clase InformadorDeUsuarios y lo imprimo
    console.log(info)
} catch (error) {
    console.log(error)
}