const { User , Dentist} = require('../models');
const errorController = require('../services/errorController')
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authController = {}

////////////////////////////////////////////////////

authController.login = async (req, res) => {
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

authController.signup = async (req, res) => {
    try {
        const { name, surname, dni, role, email, password } = req.body;

        //validacion campo vacio
        if (!name || !surname || !dni || !email || !password) {
            return errorController.emptyFields(res);
        }
        // validacion formato correo
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            return errorController.fieldsPattern(res);
        }
        // validacion formato password
        const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*()-_+=])(?=.*[a-zA-Z]).{6,}$/;
        const isValidPassword = passwordRegex.test(password);
        if (!isValidPassword) {
            return errorController.fieldsPattern(res);
        }
        // encriptacion de la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);
        // valor por defecto para role
        const roleDefault = role || 3;
        // crear nuevo usuario
        const newUser = await User.create({
            name: name,
            surname: surname,
            dni: dni,
            role: roleDefault,
            email: email.toLowerCase(),
            password: hashedPassword,
        })
        if (role === "2") {
            const newDentist = await Dentist.create({
            userId: newUser.id,
            specialtyId: 1,
            collegiate: "fieldNeeded"
        })
        }

        // si va bien, se genera token 
        let token = jwt.sign(
            {
                id: newUser.id,
                role: newUser.role,
                email: newUser.email,
            },
            process.env.SECRET_WORD);

        return res.status(201).json({
            message: "You have been registered in our application",
            newUser: newUser,
            token: token
        })

    // manejo de error, try/catch 
} catch (error) {
    if (error.name === "SequelizeUniqueConstraintError") {
        return errorController.singleFields(res);
    }
    return res.status(500).json({
        message: "User cannot register",
        error: error.name,
        error: error.message
    })
}
}

///////////////////////////
module.exports = authController;