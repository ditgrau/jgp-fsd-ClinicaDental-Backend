const { Appointment , Treatment , Dentist , User , Specialty} = require('../../models');
const appointmentByIdController = {};

///////////////////////////////////////////////////////

appointmentByIdController.appointmentById = async (req, res) => {
    try {
        // lo requiero de los query params
        const apptId = req.query.id;
        // se relaciona con la id del appointment
        const apptById = await Appointment.findOne({
            where:
            {
                id: apptId
            },
            include: [
                {
                    model: Treatment,
                    attributes: ['name', 'specialtyId'],
                    include: [
                        {
                            model: Specialty,
                            attributes: ['name']
                        }
                    ]
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
                    model: User,
                    attributes: ['name', 'surname', 'email'],
                },
            ]
        })

        if (!apptById) {
            return errorController.invalidData()
        }

        return res.json({
            message: "All results by role displayed",
            "Dentist area - Appointment details": apptById
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message
        })
    }
}

///////////////////////////////////////////////////////

module.exports = appointmentByIdController;