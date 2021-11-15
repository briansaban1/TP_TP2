import jwt from 'jsonwebtoken';

const clave = 'TP2G6';

export function autenticar(req,res,next) {

    const token = req.headers['access-token'];

    if(token){
        jwt.verify(token, clave, (err, decoded) => {

            if(err){
                return res.json({mensaje: 'token invalido'})
            }else{
                req.user = decoded;
                next();
            }
        });
    }else{
        res.send({
            mensaje: 'ingresar token.'
        })
    }

}

export function generarToken(usuario){
    const token = jwt.sign(usuario.nombre, clave);
    return token;
}