import { crearServidor} from './server.js';

const servidor = crearServidor()

const PORT = 8080;
const conexion = await servidor.conectar(PORT)

console.log(`servidor conectado en puerto ${conexion.address().port}`)