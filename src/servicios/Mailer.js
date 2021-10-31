import { credencialesMail } from '../config.js'

export default class Mailer {
    constructor(credenciales) {
        this.clienteMails = new ClienteMails(credenciales)
    }

    async enviar(asunto, destinatario, texto) {
        await clienteMails.send({
            body: texto
        })
    }
}