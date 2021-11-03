import Usuario, { toDTO } from '../modelos/Usuario.js'
import EnviarMails from '../servicios/Mailer.js'

const mail = new EnviarMails()

async function crearUsuario(daoPersonas, nombre, apellido, usuario, password, email, tipo) {
    const id = Usuario.nextId()
    const persona = new Usuario(id, nombre, apellido, usuario, password, email, tipo)
    await daoPersonas.guardar(toDTO(persona))
    
    //se envia mail de registro
    try{
        await mail.enviar_mail(email, nombre, apellido)
        console.log('mail enviado')
    }catch(error){
       console.log(error)
    }
    //
    
    return persona
}

export { crearUsuario }