const { User } = require('../models');
const bcrypt = require('bcrypt');
const userController = {}

///////////////////////////////////////////////////////

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

//////////////////////////////////////////////////////

userController.getUSerByRole = async (req, res) =>{
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

//////////////////////////////////////////////////////

userController.myProfile = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        const myProfile = await User.findByPk(myId)

        return res.json({
                succcess: true,
                message: "Your profile: ",
                myProfile: myProfile
            })    
    } 
    
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.name
        })

    }
}

//////////////////////////////////////////////////////

userController.updateProfile = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        const { name, surname, dni, email, password } = req.body; 
        //lo requiero del body como en el registro
        const hashedPassword = bcrypt.hashSync(password, 10);
        // primero va la peticion al body, luego el where
        const myProfile = await User.update({
             // update 
            name: name || this.User, // User.name = User (por el modelo(?)) //this.profile (undefined) 
            surname:surname || this.User,
            dni: dni || this.User,
            email: email || this.User, 
            password: hashedPassword || this.User,
            },{
                where: {
                    id: myId
                },
            } 
        )

        const updatedProfile = await User.findByPk(myId)
        return res.json({
                succcess: true,
                message: "Your profile: ",
                myProfile: updatedProfile,
                rowsChanged: myProfile,
            })    
    } 
    
    catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })   
    }
}

///////////////////////////
module.exports = userController;