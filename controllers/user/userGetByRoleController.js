const { User } = require('../../models');
const userGetByRoleController = {}

///////////////////////////////////////////////////////

userGetByRoleController.getByRole = async (req, res) => {
    try {
        const { role } = req.params;
        const usersByRole = await User.findAll(
            {
                where: {
                    role: role
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"]
                }
            }
        )

        if (usersByRole.length === 0) {
            return res.status(204).json({
                success: false,
                message: "No content for this role id",
            })
        }

        return res.json({
            sucess: true,
            message: "All results by role displayed",
            usersByRole: usersByRole
        })
    }

    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

//////////////////////////////////////////////////

module.exports = userGetByRoleController;