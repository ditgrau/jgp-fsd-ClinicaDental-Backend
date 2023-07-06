const { Appointment, Treatment, Dentist } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentUpdateController = {};

/////////////////////////////////////////////////////////////

appointmentUpdateController.updateAppointment = async (req, res) => {
    try {
        //localizamos la cita
        const myId = req.userId
        const { id } = req.params
        const { dentistId, treatmentId, date, hour } = req.body
        const choosenTreatment = await Treatment.findByPk(treatmentId,
            {
                attributes:
                {
                    exclude: ["createdAt", "updatedAt"]
                }
            });
        const choosenDentist = await Dentist.findByPk(dentistId)

        if (choosenTreatment.specialtyId !== choosenDentist.specialtyId) {
            return res.json({
                message: "Invalid option (dentist/treatment)"
            })
        }

        if (hour > '19:30:00' && hour < '09:00:00') {
            return errorController.timeHour(res);
        }

        if (choosenTreatment === null || choosenDentist === null) {
            return errorController.emptyFields(res);
        }

        const updateAppoint = await Appointment.update(
            {
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
                date: finalAppoint.date,
                hour: finalAppoint.hour,
            },
            "Changed records": updateAppoint,
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Can not be displayed',
            error: error.message,
        })
    }
}

/////////////////////////////////////////////////////////////

module.exports = appointmentUpdateController;
