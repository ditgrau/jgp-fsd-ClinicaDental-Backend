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

    // if (Object.values(newAppoint).includes("")) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Data required"
    //   }) 
    // }

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

module.exports = apptUserController;

