const { Appointment , User, Dentist } = require('../../models');
const appointmentGetAllController = {};

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

appointmentGetAllController.getAllAppointments = async (req, res) => {
    try {
        const allAppt = await Appointment.findAll({
            attributes: 
            {
                exclude: ["createdAt", "updatedAt"]
            },
            include: [
                {
                    model: User,
                    attributes : ['name', 'surname']
                },
                {
                    model: Dentist,
                    attributes: ['userId'],
                    include: [
                        {
                            model: User,
                            attributes : ['name', 'surname']
                        }
                    ]
                }
            ]
        });

        return res.json({
            success: true,
            message: `${allAppt.length} results displayed`,
            "Dentist area - All appointments": allAppt
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

///////////////////////////////////////////////////////

module.exports = appointmentGetAllController;