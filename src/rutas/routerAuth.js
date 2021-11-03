import { Router } from 'express'
import { getDao } from '../daos/DaoFactory.js'
import jwt from "jsonwebtoken";

const daoPersonas = getDao()

const routerAuth = Router()

//se crea
routerAuth.get('/', async (req, res) => {
    try {

        const token = jwt.sign({id: 0},process.env.SECRET, {
            expiresIn: 86400 //24hs
        })

        res.json(token)
    } catch (error) {
        res.json({ error: "no se pudo obtener el token " + error.message })
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

export { routerAuth }