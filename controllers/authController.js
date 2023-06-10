// const { request } = require('express');
const { User } = require('../models');
var jwt = require('jsonwebtoken');

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