const { Appointment } = require('../models');
const appointmentDentistController = {};

/////////////////////////////////////////////////////////////

appointmentDentistController.myApptDentist = async (req, res) => {
  try {
    const myId = req.userId
    const myAppointments = await Appointment.findAll({
      where:
      {
        dentistId: myId
      },
      attributes:
      {
        exclude: ["createdAt", "updatedAt"]
      }
    })

    return res.json({
      success: true,
      message: `Your ${myAppointments.length} dental appointments`,
      "Dentist area - My appointments": myAppointments
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Can not be displayed',
      error: error.message
    })
  }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

appointmentDentistController.getAllAppt = async (req, res) => {
  try {
    const allAppt = await Appointment.findAll({
      attributes:
      {
        exclude: ["createdAt", "updatedAt"]
      }
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

appointmentDentistController.apptById = async (req, res) => {
  try {
    // lo requiero de los query params
    const apptId = req.query.id;
    // se relaciona con la id del appointment
    const apptById = await Appointment.findOne({
      where:
      {
        id: apptId
      },
    })

    if(!apptById){
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

module.exports = appointmentDentistController;
