const { User } = require('../models');
const userController = {}
///////////////////////////

userController.getAllClients = async (req, res) => {
    try {
        const roleId = 3 //user 
        const allClients = await User.findAll(
            {
                where: {
                    role: roleId
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


userController.getUSerByRole = async (req, res) =>{
    try {
        const { role } = req.body;
        console.log(role);
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

///////////////////////////
module.exports = userController;