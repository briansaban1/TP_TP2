import { Router } from 'express'
import { crearPersona } from '../casosDeUso/altaDePersona.js'
import { modificarPersona } from '../casosDeUso/modificarPersona.js'
import { getDao } from '../daos/DaoFactory.js'

const daoPersonas = getDao()

const routerPersonas = Router()

//se crea
routerPersonas.post('/', async (req, res) => {
    try {
        const { nombre, edad } = req.body
        const persona = await crearPersona(daoPersonas, nombre, edad)
        res.json(persona)
    } catch (error) {
        res.json({ error: "no se pudo crear: " + error.message })
    }
})

//se actualiza
routerPersonas.put('/:idPersona', async (req, res) => {
    const [ [ campo, valor ] ] = Object.entries(req.body)

    const { idPersona } = req.params
    try {
        const modificada = await modificarPersona(daoPersonas, idPersona, campo, valor)
        res.json(modificada)
    } catch (error) {
        res.json({ error: 'no se pudo modificar' })
    }
})

export { routerPersonas }