import Usuario, { toDTO } from '../modelos/Usuario.js'
import enviar_mail from '../servicios/Mailer.js'

async function crearUsuario(daoPersonas, nombre, apellido, usuario, password, email, tipo) {
    const id = Usuario.nextId()
    const persona = new Usuario(id, nombre, apellido, usuario, password, email, tipo)
    await daoPersonas.guardar(toDTO(persona))
    //se envia mail de registro
    enviar_mail(email, nombre, apellido)
    //
    return persona
}

export { crearUsuario }