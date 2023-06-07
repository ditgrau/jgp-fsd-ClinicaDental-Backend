
const { Role } = require('../models');
const roleController = {};


roleController.getAllRoles = async (req, res) => {
    try {
        const allRoles = await Role.findAll(
            {
                attributes: {
                    exclude: ["createdAt", "updatedAt"]
                }
            }
        );
        return res.json ({
            success: true,
            message: "All results displayed",
            allRoles: allRoles
        }
        )
        
    } catch (error) {
        return res.status(500).json ({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
        
    }
}


roleController.createRole = async (req, res) => {
try {
    const { name } = req.body

    const newRole = await Role.create (
        {
        name: name,
        }
    )
    
    return res.json (
        {
        sucess: true,
        message: "New role created",
        data: newRole       
        }
    )
    
} catch (error) {
    return res.status(500).json({
        success: false,
        message: "Role can not be created",
        error: error.message
    })
    
}

}


module.exports = roleController;