import DaoUsuariosMem from './DaoUsuariosMem.js'
import DaoUsuariosFS from './DaoUsuariosFS.js'
import DaoUsuariosMongoDb from './DaoUsuariosMongoDb.js'

import DaoServiciosMongoDb from './DaoServiciosMongoDb.js'
import DaoServiciosMem from './DaoServiciosMem.js'


import { tipoUsr } from '../config.js'

let daoUsuarios
let daoServicios

switch (tipoUsr) {
    case 'MEM':
        daoUsuarios = new DaoUsuariosMem()
        daoServicios = new DaoServiciosMem()
        break
    case 'FS':
        daoUsuarios = new DaoUsuariosFS('./db/personas.json')
        break
    case 'DB':
        daoUsuarios = new DaoUsuariosMongoDb()
        daoServicios = new DaoServiciosMongoDb()
        break
    default:
        daoUsuarios = new DaoUsuariosMem()
        daoServicios = new DaoServiciosMem()
}

function getDaoUsr() {
    return daoUsuarios 
    
}

function getDaoSer(){
    return daoServicios
}

export { getDaoUsr, getDaoSer }