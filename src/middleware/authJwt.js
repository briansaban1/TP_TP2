import jwt from 'jsonwebtoken';

export const verifyToken = async (req, res, next) =>{
try {

    //Verifico que contenga el header con el token
    const token = req.headers['tp2-access-token'];
    if(!token) return res.status(403).json({message: 'Token must be provide'});

    //Decodifico el token que dentro tiene el id del usuario.
    const decoded = jwt.verify(token,process.env.SECRET);

    //Lo guardo en el request para usarlo en los demas middlewares.
    req.userId = decoded.id;

    //Busco el usuario y verifico que exista
    const user = fromDTO(await daoPersonas.buscar(Number(req.userId)))
    if(!user) return res.status(404).json({message: "No user found"});

    next();
    
} catch (error) {
    return res.status(401).json({message: "Unauthorized"});
}
    
}