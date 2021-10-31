import DaoUsuarios from './DaoUsuarios.js'
import fs from 'fs'

class DaoUsuariosFS extends DaoUsuarios {
    constructor(ruta) {
        super()
        this.ruta = ruta
    }

    async _leerPersonas() {
        const txt = await fs.promises.readFile(this.ruta, 'utf-8')
        const personas = JSON.parse(txt)
        return personas
    }

    async buscar(id) {
        const personas = await this._leerPersonas()
        const index = personas.findIndex(p => p.id === id)
        if (index != -1) {
            return personas[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(persona) {
        const personas = await this._leerPersonas()
        const index = personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            personas.push(persona)
        } else {
            personas[ index ] = persona
        }
        const txtModificado = JSON.stringify(personas, null, 2)
        await fs.promises.writeFile(this.ruta, txtModificado)
    }
}

export default DaoUsuariosFS