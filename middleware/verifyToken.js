const jwt = require('jsonwebtoken');

/////////////////////////////////////////////

const auth = (req, res, next) => { 
// middleware, tres parametros
    try {
        // capturar el token del header
        const bearerToken = req.headers.authorization;
        // si no existe: error
        if(!bearerToken) {
            return res.status(403).json(
                {
                    success: false,
                    message: "Access not allowed"
                }
            )
        }
        const token = bearerToken.split(" ")[1];   
        // decodificacion 
        const decoded = jwt.verify(token, process.env.SECRET_WORD);
        // importante, es la info que extraigo del token
        req.userId = decoded.id;
        req.roleId = decoded.role;
        req.email = decoded.email;
        // tercer parametro: continua    
        next();

    } catch (error) {
        return res.status(500).json ({
            success: false,
            message: "Server Error",
            error: error.message
        })  
    }
}

///////////////////////////////////////////////

module.exports = auth;