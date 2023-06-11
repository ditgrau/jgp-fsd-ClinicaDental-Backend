
const isDentist = async (req, res, next) => {
    try {
        if (req.roleId !== 2 || req.roleId !== 1) { //en mi app los admin entran en todo
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

module.exports = isDentist;