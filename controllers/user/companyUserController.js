const { User } = require('../models');
const companyUserController = {}

///////////////////////////////////////////////////////

companyUserController.getAllClients = async (req, res) => {
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
            message: "All results displayed",
            allClients: allClients,
            sucess: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

//////////////////////////////////////////////////////

companyUserController.getUSerByRole = async (req, res) => {
    try {
        const { role } = req.body;
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

companyUserController.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name , surname , dni , email , password , role , state } = req.body
        
        if (role === '2') {
            const createDentist = await Dentist.create({
                userId: id,
                specialtyId: 1,
                collegiate: "Default"
            })            
        }
        
        const updateAppoint = await User.update(
            {
                name: name || this.User,
                surname: surname || this.User,
                dni: dni || this.User,
                email: email || this.User,
                password: password || this.User,
                role: role || this.User,
                state: state || this.User,
            },
            {
                where: {
                    id: id
                },
            }
        )
    
        return res.json({
            success: true,
            updateAppoint:updateAppoint
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
        })
    }
}

//////////////////////////////////////////////////

module.exports = companyUserController;