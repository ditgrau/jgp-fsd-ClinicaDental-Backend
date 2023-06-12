
const isAdmin = async (req, res, next) => {

    try {
        if (req.roleId !== 1) { 
            return res.status(401).json({ //https://http.cat/
                message: "Access is not authorised",
            })
        }

        next();

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.name
        })
    }
}

//////////////////////////////////////////////////

module.exports = isAdmin;