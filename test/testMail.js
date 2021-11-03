import EnviarMails from '../src/servicios/Mailer.js'

const mail = new EnviarMails()


    //se envia mail de registro
    try{
        await mail.enviar_mail("brian@brian.com", 'nombre', 'apellido')
        console.log('mail enviado')
    }catch(error){
       console.log(error)
    }

    