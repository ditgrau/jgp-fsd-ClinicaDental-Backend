//saltRounds = 10; secret = "myword"
const { User } = require('../models');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const authController = {}

////////////////////////////////////////////////////

authController.login = async (req, res)=> {
    try {
        //requerimiento al body
        const { email, password } = req.body
        //funcion login, para encontrar correspondencias por email y password con la BD
        const userLogin = await User.findOne({
                where: {
                    email: email
                }
            });
        // si no encuentra el email, responde con mensaje 
        if (!userLogin) {
            throw new SyntaxError('Invalid credentials correo'); //documentacion js (Lanzando nuestros propios errores/operador "throw")
        }
        // ahora la validacion de la password, almacenada en el registro de la BD
        const checkedPasword = bcrypt.compareSync(password, userLogin.password);
        // si la comparacion retorna false, throw te manda al catch
        if (!checkedPasword) {
            throw new SyntaxError('Invalid credentials contraseña'); 
        }
        // si va bien, se genera token 
        const token = jwt.sign(
                { 
                    id: userLogin.id,
                    role: userLogin.role,
                    email: userLogin.email
                }, 'myword');
        // todo valido
        return res.json({
            success: true,
            message: "Puede acceder",
            userLogin: { 
                name: userLogin.name,
                surname: userLogin.surname, 
                email: userLogin.email
            },
            token: token
        })
    //error 500 - Internal Server Error
    } catch (error) {
        return res.status(500).json(
            {
                success: false, 
                message: "User can be logged",
                error: error.message,
            }
        )
    }
}

///////////////////////////////////////////////////////

authController.signup = async (req, res)=> {
    try {
        //requerimiento al body 
        const { name, surname, dni, role, email, password } = req.body;
        // encriptacion de la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);
        // valor por defecto para role
        const roleDefault = role || 3;
        // crear nuevo usuario
        const newUser = await User.create({
            name: name,
            surname:surname,
            dni: dni,
            role: roleDefault,
            email: email, 
            password: hashedPassword,
        })
        // si va bien, se genera token 
        .then (newUser => {
            let token = jwt.sign(
                { 
                    id: newUser.id,
                    role: newUser.role,
                    email: newUser.email,
                }, 'myword');
        
        return res.json({
            sucess: true,
            message: "Registered user",
            newUser: newUser, //////////////////////// quitarlo (?)
            token: token
        })
    })
    // manejo de error, try/catch 
    } catch (error) {
        return res.status(500).json({
            sucess:false,
            message: "User cannot register",
            error: error.name
        })
        
    }
}

///////////////////////////
module.exports = authController;