const { Appointment } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentDeleteController = {};

/////////////////////////////////////////////////////////////

appointmentDeleteController.deleteAppointment = async (req, res) => {
    try {
        const myId = req.userId
        const { id } = req.params

        const appointment = await Appointment.findOne({
            where:
            {
                id: id,
                userId: myId
            }
        })
        const appointmentDelete = await Appointment.destroy({
            where:
            {
                id: id,
                userId: myId
            }
        })

        if (appointment === null) {
            return errorController.badRequest(res)
        }

        return res.json({
            message: 'Your appointment has been deleted',
            appointment: appointment,
            appointmentDelete: appointmentDelete,
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

module.exports = appointmentDeleteController;