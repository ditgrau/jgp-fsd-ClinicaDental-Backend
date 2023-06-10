const jwt = require('jsonwebtoken');

////////////////////////////////

// funcion middleware, con tres parametros
const auth = (req, res, next) => {
    try {
        // capturar el token del header
        const bearerToken = req.headers.authorization;
        // di no existe: error
        if(!bearerToken) {
            return res.json(
                {
                    success: true,
                    message: "Access not allowed"
                }
            )
        }

        const token = bearerToken.split(" ")[1];   
        const decoded = jwt.verify(token, 'myword');
        
        req.userId = decoded.userId;
        req.roleId = decoded.roleId;
        req.email = decoded.email;

        next();

    } catch (error) {
        return res.status(500).json ({
            success: false,
            message: "Invalid token",
            error: error.message
        })
        
    }
}

//////////////////////////////////

module.exports = auth;