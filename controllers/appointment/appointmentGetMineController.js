const { Appointment, Treatment, Dentist, User } = require('../../models');
const errorController = require('../../services/errorController')
const appointmentGetMineController = {};

/////////////////////////////////////////////////////////////

appointmentGetMineController.myAppointments = async (req, res) => {
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
      },
      include: [
        {
          model: Treatment,
          attributes: ['name']
        },
        {
          model: Dentist,
          attributes: ['collegiate'],
          include: [
            {
              model: User,
              attributes: ['name', 'surname']
            }
          ]
        }
      ]
    })

    return res.json({
      success: true,
      message: `Your ${myAppointments.length} dental appointments`,
      myAppointments: myAppointments
    })

  } catch (error) {
    res.status(500).json({
      message: 'Can not be displayed',
      error: error.message,
      success: false,
    })
  }
}

/////////////////////////////////////////////////////////////

module.exports = appointmentGetMineController;

