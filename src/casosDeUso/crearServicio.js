import Servicios, { toDTO } from '../modelos/Servicios.js'

async function crearServicio(daoPersonas, nombre, apellido, usuario, password, email, tipo) {
    const id = Servicios.nextId()
    const servicio = new Servicios(id, nombre, apellido, usuario, password, email, tipo)
    await daoPersonas.guardar(toDTO(servicio))
    return servicio
}

export { crearServicio }