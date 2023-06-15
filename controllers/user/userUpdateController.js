const { User , Dentist } = require('../../models');
const userUpdateController = {}

//////////////////////////////////////////////////

userUpdateController.updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const { name , surname , dni , email , password , role , state } = req.body
        
        if (role === '2') {
            const createDentist = await Dentist.create({
                userId: userId,
                specialtyId: 1,
                collegiate: "Default"
            })            
        }

        const userProfile = await User.findByPk(userId)

        const updateAppoint = await User.update(
            {
                name: name || userProfile.name,
                surname: surname || userProfile.surname,
                dni: dni || userProfile.dni,
                email: email || userProfile.email,
                password: password || userProfile.password,
                role: role || userProfile.role,
                state: state || userProfile.state,
            },
            {
                where: {
                    id: id
                },
            }
        )
    
        return res.json({
            success: true,
            updateAppoint:updateAppoint
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
        })
    }
}

//////////////////////////////////////////////////

module.exports = userUpdateController;