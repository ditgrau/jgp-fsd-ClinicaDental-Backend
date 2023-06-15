const { User } = require('../../models');
const bcrypt = require('bcrypt');
const errorController = require('../../services/errorController');
const userUpdateProfileController = {};

////////////////////////////////////////////////////////////////////

userUpdateProfileController.updateProfile = async (req, res) => {
    try {
        const userId = req.userId //lo saco del token
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
        
        // primero va la peticion al body, luego el where
        const userProfile = await User.findByPk(userId)

        const updatedProfile = await User.update({
            // update 
            name: name || userProfile.name, // User.name = User // 
            surname: surname || userProfile.surname,
            dni: dni || userProfile.dni,
            email: email || userProfile.email,          
        },
            {
                where: {
                    id: userId
                },
            }
        )
        
        // esta funcion es para que en la res me devuelva los datos nuevos
        const finalProfile = await User.findByPk(userId,
            {
                attributes: {
                    exclude: ['password']
                }
            })

        return res.json({
            succcess: true,
            message: "Your profile: ",
            myProfile: finalProfile,
            rowsChanged: updatedProfile,
            userProfile: userProfile
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

////////////////////////////////////////////////////////////////////

module.exports = userUpdateProfileController;