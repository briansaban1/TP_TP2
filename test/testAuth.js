import { generarToken } from '../src/servicios/Auth.js'


try {

    const usuario = {
        nombre: "alexis",
        edad: 20
    }

    //se genera token
    const token = await generarToken(usuario,"TP2G6");
    console.log(token);

} catch (error) {
    console.log(error)

}
