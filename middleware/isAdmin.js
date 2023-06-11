
const isAdmin = async (req, res, next) => {

    try {
        if (req.roleId !== 1) { //el objeto me devuelve string no integer
            return res.status(401).json({ //https://http.cat/
                success: false,
                message: "Unauthorized",
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

//////////////////////////////////

module.exports = isAdmin;