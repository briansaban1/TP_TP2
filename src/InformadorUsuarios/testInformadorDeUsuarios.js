import { getInformadorDeUsuarios } from "./index.js";

const idu = getInformadorDeUsuarios()

try {
    const info = await idu.getInfo()
    console.log(info)
} catch (error) {
    console.log(error)
}