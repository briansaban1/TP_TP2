import DaoUsuarios from './DaoUsuarios.js'

class DaoUsuariosMem extends DaoUsuarios {
    constructor() {
        super()
        this.personas = []
    }

    async buscar(id) {
        const index = this.personas.findIndex(p => p.id === id)
        if (index != -1) {
            return this.personas[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(persona) {
        const index = this.personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            this.personas.push(persona)
        } else {
            this.personas[ index ] = persona
        }
    }

    async insertar(persona) {
        const index = this.personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            this.personas.push(persona)
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async eliminar(persona) {
        const index = this.personas.findIndex(p => p.id === persona.id)
        if (index == -1) {
            this.personas.push(persona)
        } else {
            this.personas[ index ] = persona
        }
    }
}

export default DaoUsuariosMem