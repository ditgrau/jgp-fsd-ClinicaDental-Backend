const { User } = require('../models');
const authController = {}
///////////////////////////

// authController.signUp = async (req, res) => {
//     try {
//         const {name, surname, birth_date, email, password } = req.body;

//         const newUser = await User.create({
//             name: name,
//             surname: surname,
//             birth_date: birth_date,
//             email: email,
//             password: password
//         })

        
//     } catch (error) {
//         return res.status(500).json({
//             success: false, 
//             message: "Registration is not performed",
//             error: error.message
//         }) 
//     }
// }

///////////////////////////
module.exports = authController; 