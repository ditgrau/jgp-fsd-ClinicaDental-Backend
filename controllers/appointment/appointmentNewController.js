const { Appointment , Treatment , Dentist , User } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentNewController = {};

/////////////////////////////////////////////////////////////

appointmentNewController.newAppointment = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        //requiero del body
        const { dentistId, treatmentId, date, hour } = req.body;
        const choosenTreatment = await Treatment.findByPk(treatmentId,
            {
                attributes:
                {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
        const choosenDentist = await Dentist.findByPk(dentistId, {
            include: {
                model: User,
                attributes: ['name', 'surname']
            },
            attributes:  ['collegiate', 'specialtyId']
        })

        if (choosenTreatment.specialtyId !== choosenDentist.specialtyId) {
            return res.json({
                message: "Invalid option (dentist/treatment)"
            })
        }

        if (!dentistId || !treatmentId || !date || !hour) {
            return errorController.emptyFields(res);
        }

        if (hour > '19:30:00' && hour < '09:00:00') {
            return errorController.timeHour(res);
        }

        const newAppoint = await Appointment.create(
            {
                userId: myId,
                dentistId: dentistId,
                treatmentId: treatmentId,
                date: date,
                hour: hour
            }
        )

        return res.json({
            success: true,
            message: `Appointment arranged on ${newAppoint.date} at ${newAppoint.hour} `,
            newAppoint: newAppoint,
            choosenTreatment:choosenTreatment,
            choosenDentist: choosenDentist
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: `Server error`,
            error: error.message
        })
    }
}

/////////////////////////////////////////////////////////////

module.exports = appointmentNewController;
