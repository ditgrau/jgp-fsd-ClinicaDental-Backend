//saltRounds = 10; secret = "myword"
const { User } = require('../models');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const authController = {}
var token = jwt.sign({ foo: 'bar' }, 'shhhhh');
///////////////////////////

authController.login = async (req, res)=> {
    try {
        const { email, password } = req.body
        const userLogin = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!userLogin) {
            return res.json({
                sucess: true,
                message: "Invalid credentials"
            })
        }
        // ahora la validacion de la password, almacenada en el registro de la BD
        const checkedPasword = bcrypt.compareSync(password, password);
        console.log(checkedPasword);

        return res.json({
            success: true,
            message: "puede acceder",
            userLogin: userLogin
        })

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
                    email: newUser.email
                }, 'myword');
        
        return res.json({
            newUser: newUser,
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