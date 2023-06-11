

const noUser = async (req, res, next) => {
    try {
        if (req.roleId == "3") { //el objeto me devuelve string no integer
            return res.status(401).json({ //https://http.cat/
                success: false,
                message: "Unauthorized" + req.roleId,
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

module.exports = noUser;