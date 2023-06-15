const { Appointment , User, Treatment , Dentist } = require('../../models');
const appointmentDentistController = {};

/////////////////////////////////////////////////////////////

appointmentDentistController.appointmentsDentist = async (req, res) => {
  try {
    const myId = req.userId
    const myName = await User.findByPk(myId,
    {
      attributes: ['name', 'surname']
    })
    const dentist = await Dentist.findOne({
      where: {
        userId: myId
      }
    })
    const myAppointments = await Appointment.findAll({
      where:
      {
        dentistId: dentist.id
      },
      attributes:
      {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [
        {
          model: User,
          attributes: ['name', 'surname']
        },
        {
          model: Treatment,
          attributes: ['name']
        }
      ]
    })

    return res.json({
      success: true,
      nameDentist: myName,
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
