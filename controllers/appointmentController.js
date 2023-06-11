const { Appointment , User} = require ('../models');
const appointmentController = {};

/////////////////////////////////////////////////////////////

appointmentController.newAppoint = async (req, res) => {
  try {
    const myId = req.userId //lo saco del token
    //requiero del body
    const {dentistId, date, hour} = req.body;
    const newAppoint = await Appointment.create({
        userId: myId,
        dentistId: dentistId,
        date: date,
        hour: hour
    })

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

appointmentController.myAppointments = async (req, res) => {
  try {
    const myId = req.userId 
    
    const myAppointments = await Appointment.findAll({

      where: {
        userId: myId
      },
      attributes: {
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

appointmentController.myApptDentist = async (req, res) => {
  try {
    const myId = req.userId 
    
    const myAppointments = await Appointment.findAll({

      where: {
        dentistId: myId
      },
      attributes: {
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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

appointmentController.getAllAppt = async (req, res) => {
  try {
    const allAppt = await Appointment.findAll(
      {
        attributes: { exclude: ["createdAt", "updatedAt"] }
      }
    );
    return res.json (
      {
      success: true,
      message: `${allAppt.length} results displayed`,
      allAppt: allAppt
      }
  )
  } catch (error) {
    return res.status(500).json (
        {
        success: false,
        message: 'Can not be displayed',
        error: error.message
        }
    ) 
  }
  
}

///////////////////////////////////////////////////////

appointmentController.apptById = async (req, res) => {
  try {
    const apptId = req.query.id;
    const apptById = await Appointment.findAll({
      where: {
        id: apptId
    },
    })
    return res.json({
      sucess: true, 
      message: "All results by role displayed",
      "Dentist area - Appointment in detail": apptById
  })

  } catch (error) {
    res.status(500).json({
        success: false,
        message: 'Can not be displayed',
        error: error.message
    })
    
}
}
module.exports = appointmentController;




/*El sequelize.fn()método solo se puede llamar desde la propiedad attributes o 
attributes.include, y las propiedades solo son compatibles con el findAll()método. */

/* [
    sequelize.fn
    (
        "DATE_FORMAT", 
        sequelize.col("paymentDate"), 
        "%d-%m-%Y %H:%i:%s"
    ),
    "paymentDate",
  ] */

// DAYNAME() Devolver el nombre del día de la semana