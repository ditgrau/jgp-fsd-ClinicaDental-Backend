const { User, Appointment, Dentist, Treatment} = require('../../models');
const userGetAllController = {}

///////////////////////////////////////////////////////

userGetAllController.getAll = async (req, res) => {
    try {
    
        const allUsers = await User.findAll(
            {
                attributes: {
                    exclude: ["createdAt", "updatedAt", "password"]
                },
                include: [
                    {
                        model: Appointment,
                        include: [
                            {
                                model: Dentist,
                                include: [
                                    {
                                        model: User,
                                        attributes : ['name', 'surname']
                                    }
                                ]
                            },
                            {
                                model: Treatment
                            }
                        ]
                    }
                ] 
            }
        )
        return res.json({
            message: "All results displayed",
            allUsers: allUsers,
            sucess: true
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

//////////////////////////////////////////////////////

module.exports = userGetAllController;