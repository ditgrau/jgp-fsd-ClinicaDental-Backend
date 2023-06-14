const { User } = require('../../models');
const errorController = require('../../services/errorController')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authLoginController = {}

////////////////////////////////////////////////////

authLoginController.login = async (req, res) => {
    try {
        const { email, password } = req.body
        //funcion login, para encontrar correspondencias por email y password con la BD
        const userLogin = await User.findOne({
            where:
            {
                email: email
            }
        });
        if (!userLogin) {
            return errorController.badRequest(res);
        }
        // ahora la validacion de la password, almacenada en el registro de la BD
        const checkedPasword = bcrypt.compareSync(password, userLogin.password);
        // si la comparacion retorna false, throw te manda al catch
        if (!checkedPasword) {
            return errorController.badRequest(res);
        }
        // si va bien, se genera token 
        const token = jwt.sign(
            {
                id: userLogin.id,
                role: userLogin.role,
                email: userLogin.email
            },
            process.env.SECRET_WORD);

        // todo valido
        return res.json({
            success: true,
            message: "Valid credentials, access allowed",
            userLogin:
            {
                name: `${userLogin.name} ${userLogin.surname}`,
                email: userLogin.email,
                role: userLogin.role
            },
            token: token
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Access denied, unable to log in",
            error: error.message,
        })
    }
}

///////////////////////////////////////////////////////

module.exports = authLoginController;