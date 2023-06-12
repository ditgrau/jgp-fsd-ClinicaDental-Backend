const { User } = require('../models');
const errorController = require('../services/errorController')
const bcrypt = require('bcrypt');
const userController = {}

//////////////////////////////////////////////////////

userController.myProfile = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        const myProfile = await User.findByPk(myId, {
            attributes: {
                exclude: ['password']
            }
        })

        return res.json({
            succcess: true,
            "My profile": myProfile
        })
    }

    catch (error) {
        return res.status(500).json({
            success: false,
            error: error.name,
            message: 'Can not be displayed',
        })
    }
}

//////////////////////////////////////////////////////

userController.updateProfile = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        const { name, surname, dni, email, password } = req.body;
        // validacion formato correo
        if (email) {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const isValidEmail = emailRegex.test(email);
            if (!isValidEmail) {
                return errorController.fieldsPattern(res);
            }
        }

        if (password) {
            // validacion formato password
            const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()-_+=])(?=.*[a-zA-Z]).{6,}$/;
            const isValidPassword = passwordRegex.test(password);
            if (!isValidPassword) {
                return errorController.fieldsPattern(res);
            }
        }

        const hashedPassword = bcrypt.hashSync(password, 10);
        // primero va la peticion al body, luego el where

        const myProfile = await User.update({
            // update 
            name: name || this.User, // User.name = User // 
            surname: surname || this.User,
            dni: dni || this.User,
            email: email || this.User,
            password: hashedPassword || this.User,
        },
            {
                where: {
                    id: myId
                },
            }
        )
        // esta funcion es para que en la res me devuelva los datos nuevos
        const updatedProfile = await User.findByPk(myId,
            {
                attributes: {
                    exclude: ['password']
                }
            })
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

userController.getUSerByRole = async (req, res) => {
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

module.exports = userController;