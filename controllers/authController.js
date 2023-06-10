// const { request } = require('express');
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

        return res.json({
            success: true,
            message: "puede acceder"
        })

    } catch (error) {
        return res.status(500).json(
            {
                success: false, 
                message: "User can be logged",
                error: error
            }
        )
    }
}

authController.signup = async (req, res)=> {
    try {
        //requerimiento al body 
        const { name, surname, dni, email, password } = req.body;
        // encriptacion de la contraseña
        const hashedPassword = bcrypt.hashSync(password, 10);
        // crear nuevo usuario
        const newUser = await User.create({
            name: name,
            surname:surname,
            dni: dni,
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
    // manejo de error, promesa
        .catch(error => {
            console.log('error: ', error.name);
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