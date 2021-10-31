class Servicios {
    constructor(id, titulo, descripcion, telefono, barrio, rubro) {
        this.id = id
        this.setTitulo(titulo)
        this.setDescripcion(descripcion)
        this.setTelefono(telefono)
        this.setBarrio(barrio)
        this.setRubro(rubro)
       
    }

    setTitulo(titulo) {
        if (!titulo || titulo == '') {
            throw new Error('el título no puede ser nulo ni vacío')
        }
        this.titulo = titulo
    }

    setDescripcion(descripcion) {
        if (!descripcion || descripcion == '') {
            throw new Error('la descripcion no puede ser nula ni vacía')
        }
        this.descripcion = descripcion
    }

    setTelefono(telefono) {
        if (!telefono || telefono == '') {
            throw new Error('el telefono no puede ser nulo ni vacío')
        }
        this.telefono = telefono
    }

    setBarrio(barrio) {
        if (!barrio || barrio == '') {
            throw new Error('el barrio no puede ser nulo ni vacío')
        }
        this.barrio = barrio
    }

    setRubro(rubro) {
        if (!rubro || rubro == '') {
            throw new Error('el rubro no puede ser nulo ni vacío')
        }
        this.rubro = rubro
    }


    static ultimoId = 0

    static nextId() {
        return ++Servicios.ultimoId
    }
}

function fromDTO(dto) {
    return new Servicios(dto.id, dto.titulo, dto.descripcion, dto.telefono, dto.barrio, dto.rubro)
}

function toDTO(servicio) {
    return {
        id: servicio.id,
        titulo: servicio.titulo,
        descripcion: servicio.descripcion,
        telefono: servicio.telefono,
        barrio: servicio.barrio,
        rubro: servicio.rubro
       
    }
}

export { fromDTO, toDTO }

export default Servicios