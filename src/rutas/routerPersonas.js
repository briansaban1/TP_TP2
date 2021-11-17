import { Router } from 'express'
import { crearUsuario } from '../casosDeUso/crearUsuario.js'
import { eliminarUsuario } from '../casosDeUso/eliminarUsuario.js'
import { modificarUsuario } from '../casosDeUso/modificarUsuario.js'
import { obtenerUsuario } from '../casosDeUso/obtenerUsuario.js'
import { getDaoUsr } from '../daos/DaoFactory.js'
import { generarToken, autenticar } from '../servicios/Auth.js'

const daoUsuarios = getDaoUsr()

const routerPersonas = Router()

//se crea
routerPersonas.post('/', async (req, res) => {
    try {
        const { nombre, apellido, usuario, password, email, tipo } = req.body

        const persona = await crearUsuario(daoUsuarios, nombre, apellido, usuario, password, email, tipo);
        const token = generarToken(persona);

        const resp = 
        { 
            persona: persona,
            token: token
        }

        res.json(resp)
    } catch (error) {
        res.json({ error: "no se pudo crear: " + error.message })
    }
})


//se actualiza
routerPersonas.put('/:idPersona', autenticar, async (req, res) => {
    const [ [ campo, valor ] ] = Object.entries(req.body)
    const { idPersona } = req.params

    try {
        const modificada = await modificarUsuario(daoUsuarios, idPersona, campo, valor)
        res.json(modificada)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})

//se elimina
routerPersonas.delete('/:idPersona', autenticar, async (req, res) => {
    const { idPersona } = req.params

    try {
        const eliminado = await eliminarUsuario(daoUsuarios, idPersona)
        res.json(eliminado)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})

//se obtiene
routerPersonas.get('/:idPersona', autenticar, async (req, res) => {
    const { idPersona } = req.params

    try {
        const eliminado = await obtenerUsuario(daoUsuarios, idPersona)
        res.json(eliminado)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})



export { routerPersonas }