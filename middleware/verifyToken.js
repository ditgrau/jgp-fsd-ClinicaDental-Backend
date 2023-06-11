const jwt = require('jsonwebtoken');

////////////////////////////////

// funcion middleware, con tres parametros
const auth = (req, res, next) => {
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
        const decoded = jwt.verify(token, 'myword');
        // importarte, es la info que extraigo del token
        req.userId = decoded.id;
        req.roleId = decoded.role;
        req.email = decoded.email;

        next();

    } catch (error) {
        return res.status(403).json ({
            success: false,
            message: "Invalid token",
            error: error.message
        })
        
    }
}

//////////////////////////////////

module.exports = auth;