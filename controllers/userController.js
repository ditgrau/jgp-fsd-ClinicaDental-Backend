const { User } = require('../models');
const userController = {}
///////////////////////////

userController.getAllClients = async (req, res) => {
    try {
        const roleId = 1 //user 
        const allClients = await User.findAll(
            {
                where: {
                    role_id: roleId
                },
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"]
                }
            }
        )
        return res.json({
            sucess: true, 
            message: "All results displayed",
            allClients: allClients
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
        
    }
}
///////////////////////////
module.exports = userController;