
import { generarToken } from '../src/servicios/Auth.js'

const daoUsuarios = getDaoUsr()
const daoServicios = getDaoSer()

try {

    //se genera token
    const token = await generarToken("alexis","TP2G6");
    console.log(token);



} catch (error) {
    console.log(error)

}
