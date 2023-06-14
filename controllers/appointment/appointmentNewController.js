const { Appointment } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentNewController = {};

/////////////////////////////////////////////////////////////

appointmentNewController.newAppointment = async (req, res) => {
    try {
        const myId = req.userId //lo saco del token
        //requiero del body
        const { dentistId, date, hour } = req.body;

        if (!dentistId || !date || !hour) {
            return errorController.emptyFields(res);
        }

        if (hour > '23:59:00') {
            return errorController.timeHour(res);
        }

        const newAppoint = await Appointment.create(
            {
                userId: myId,
                dentistId: dentistId,
                date: date,
                hour: hour
            }
        )

        return res.json({
            success: true,
            message: `Appointment arranged on ${newAppoint.date} at ${newAppoint.hour} `,
            newAppoint: newAppoint,
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
