const { Role } = require('../../models');
const roleCreateController = {};

////////////////////////////////////////////////////////////////////

roleCreateController.createRole = async (req, res) => {
    try {
        const { name } = req.body
        const newRole = await Role.create({
                name: name,
            })

        return res.json({
                sucess: true,
                message: "New role created",
                data: newRole
            })

    }catch (error) {
        return res.status(500).json({
            success: false,
            message: "Role can not be created",
            error: error.message
        })
    }
}

////////////////////////////////////////////////////////////////////

module.exports = roleCreateController;