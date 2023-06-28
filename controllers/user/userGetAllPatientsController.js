const { User, Appointment, Dentist, Treatment} = require('../../models');
const userGetAllPatientsController = {}

///////////////////////////////////////////////////////

userGetAllPatientsController.getAllPatients = async (req, res) => {
    try {
        const roleId = 3 //user 
        const allClients = await User.findAll(
            {
                where: {
                    role: roleId
                },
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
            allClients: allClients,
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

module.exports = userGetAllPatientsController;