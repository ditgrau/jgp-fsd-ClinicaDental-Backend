const { Role } = require('../../models');
const roleGetAllController = {};

////////////////////////////////////////////////////////////////////

roleGetAllController.getAllRoles = async (req, res) => {
    try {
        const allRoles = await Role.findAll(
            {
                attributes: { exclude: ["createdAt", "updatedAt"] }
            }
        );
        return res.json(
            {
                success: true,
                message: "All results displayed",
                allRoles: allRoles
            }
        )

    } catch (error) {
        return res.status(500).json(
            {
                success: false,
                message: 'Can not be displayed',
                error: error.message
            }
        )
    }
}

////////////////////////////////////////////////////////////////////

module.exports = roleGetAllController;