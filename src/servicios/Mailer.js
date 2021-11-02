import nodemailer from 'nodemailer'

const MAILUSER = "orty.service@gmail.com"
const MAILPSSWD = "orty-service-pass"


export default class EnviarMails{
constructor(){
    
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            auth: {
                user: MAILUSER,
                pass: MAILPSSWD
            }
        })
}
async enviar_mail(email, nombre, apellido){
    const mail_options = {
        from: MAILUSER,
        to: email,
        subject: 'Bienvenido a ORTY-Service',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${nombre} ${apellido}</span> 
                            a la aplicación
                        </p>
                    </td>
                </tr>
                <tr bgcolor="#fff">
                    <td style="text-align:center">
                        <p style="color: #000">Un mundo de servicios a su disposición!</p>
                    </td>
                </tr>
            </table>
        `
    };
    try{
        await this.transporter.sendMail(mail_options)
        //console.log('El correo se envío correctamente');

    }catch(error){
        throw new Error(`EMAIL_ERROR: ${error}`)
        
    }
}
}
