import nodemailer from 'nodemailer'

const MAILUSER = "orty.service@gmail.com"
const MAILPSSWD = "orty-service-pass"

async function enviar_mail (email, nombre, apellido) {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        
        auth: {
            user: MAILUSER,
            pass: MAILPSSWD
        }
    });
    let mail_options = {
        from: 'orty.service@gmail.com',
        to: email,
        subject: 'Bienvenido a ORTY-Service',
        html: `
            <table border="0" cellpadding="0" cellspacing="0" width="600px" background-color="#2d3436" bgcolor="#2d3436">
                <tr height="200px">  
                    <td bgcolor="" width="600px">
                        <h1 style="color: #fff; text-align:center">Bienvenido</h1>
                        <p  style="color: #fff; text-align:center">
                            <span style="color: #e84393">${nombre, apellido}</span> 
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
   await transporter.sendMail(mail_options, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log('El correo se envío correctamente ' + info.response);
        }
    });
};

export default enviar_mail
