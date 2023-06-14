const { Appointment , User } = require('../../models');
const appointmentDentistController = {};

/////////////////////////////////////////////////////////////

appointmentDentistController.appointmentsDentist = async (req, res) => {
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
      },
      include: [
        {
          model: User,
          attributes: ['name', 'surname']
        }
      ]
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

///////////////////////////////////////////////////////

module.exports = appointmentDentistController;
