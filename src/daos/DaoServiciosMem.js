import DaoServicios from './DaoServicios.js'

class DaoServiciosMem extends DaoServicios {
    constructor() {
        super()
        this.servicios = []
    }

    async buscar(id) {
        const index = this.servicios.findIndex(p => p.id === id)
        if (index != -1) {
            return this.servicios[ index ]
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async guardar(servicio) {
        const index = this.servicios.findIndex(p => p.id === servicio.id)
        if (index == -1) {
            this.servicios.push(servicio)
        } else {
            this.servicios[ index ] = servicio
        }
    }

    async insertar(servicio) {
        const index = this.servicios.findIndex(p => p.id === servicio.id)
        if (index == -1) {
            this.servicios.push(servicio)
        } else {
            throw new Error('recurso no encontrado')
        }
    }

    async eliminar(servicio) {
        const index = this.servicios.findIndex(p => p.id === servicio.id)
        if (index == -1) {
            this.servicios.push(servicio)
        } else {
            this.servicios[ index ] = servicio
        }
    }
}

export default DaoServiciosMem