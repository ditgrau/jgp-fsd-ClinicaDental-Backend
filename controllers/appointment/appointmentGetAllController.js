const { Appointment, User, Dentist, Treatment } = require('../../models');
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
                    attributes: ['name', 'surname']
                },
                {
                    model: Dentist,
                    attributes: ['collegiate'],
                    include: [
                        {
                            model: User,
                            attributes: ['name', 'surname']
                        }
                    ]
                },
                {
                    model: Treatment,
                    attributes: ['name']
                }
            ]
        });

        return res.json({
            success: true,
            message: `${allAppt.length} results displayed`,
            allAppt: allAppt
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