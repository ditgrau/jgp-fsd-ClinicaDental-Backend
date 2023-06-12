const { Appointment } = require('../models');
const apptUserController = {};

/////////////////////////////////////////////////////////////

apptUserController.newAppoint = async (req, res) => {
  try {
    const myId = req.userId //lo saco del token
    //requiero del body
    const { dentistId, date, hour } = req.body;
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

apptUserController.myAppointments = async (req, res) => {
  try {
    const myId = req.userId
    const myAppointments = await Appointment.findAll({
      where:
      {
        userId: myId
      },
      attributes:
      {
        exclude: ["createdAt", "updatedAt", "userId"]
      }
    })

    return res.json({
      success: true,
      message: `Your ${myAppointments.length} dental appointments`,
      myAppointments: myAppointments
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Can not be displayed',
      error: error.message
    })
  }
}

/////////////////////////////////////////////////////////////

apptUserController.updateAppointment = async (req, res) => {
  try {
    //localizamos la cita
    const myId = req.userId
    const {id} = req.params
    const appointment = await Appointment.findOne({
      where:
      {
        id: id,
        userId: myId
      },
      attributes:
      {
        exclude: ["createdAt", "updatedAt"]
      }
    })

    const { dentistId, date, hour } = req.body

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

    return res.json({
      appointment: appointment,
      appointmentId: id,
      myId: myId,
      updateAppoint: updateAppoint
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

apptUserController.deleteAppointment = async (req, res) => {
  try {
    const myId = req.userId
    const {id} = req.params
    
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
    return res.json({
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
module.exports = apptUserController;

