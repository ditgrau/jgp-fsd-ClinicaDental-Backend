const { User } = require('../../models');
const userUpdateController = {}

//////////////////////////////////////////////////

userUpdateController.updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name , surname , dni , email , password , role , state } = req.body
        
        if (role === '2') {
            const createDentist = await Dentist.create({
                userId: id,
                specialtyId: 1,
                collegiate: "Default"
            })            
        }
        
        const updateAppoint = await User.update(
            {
                name: name || this.User,
                surname: surname || this.User,
                dni: dni || this.User,
                email: email || this.User,
                password: password || this.User,
                role: role || this.User,
                state: state || this.User,
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