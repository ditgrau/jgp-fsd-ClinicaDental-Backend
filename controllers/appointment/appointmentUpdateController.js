const { Appointment } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentUpdateController = {};

/////////////////////////////////////////////////////////////

appointmentUpdateController.updateAppointment = async (req, res) => {
    try {
        //localizamos la cita
        const myId = req.userId
        const { id } = req.params
        const { dentistId, date, hour } = req.body

        if (hour > '23:59:00') {
            return errorController.timeHour(res);
        }

        const updateAppoint = await Appointment.update(
            {
                dentistId: dentistId || this.Appointment,
                date: date || this.Appointment,
                hour: hour || this.Appointment
            },
            {
                where: {
                    id: id,
                    userId: myId
                },
            }
        )

        const finalAppoint = await Appointment.findByPk(id)
        return res.json({
            "Updated Appointment": {
                dentistId: finalAppoint.dentistId,
                date: finalAppoint.date,
                hour: finalAppoint.hour
            },
            "Changed records": updateAppoint,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message,
            error: error.name
        })
    }
}

/////////////////////////////////////////////////////////////

module.exports = appointmentUpdateController;
