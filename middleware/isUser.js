
const isUser = async (req, res, next) => {

    try {
        if (req.roleId !== 3) {
            return res.status(401).json({ //https://http.cat/
                success: false,
                message: "Unauthorized, client area"
            })
        }
        
        next();

    } catch (error) {
        return res.status(500).json({
            success: false, 
            error: error.message
        })
    }
}

///////////////////////////////////////////

module.exports = isUser;