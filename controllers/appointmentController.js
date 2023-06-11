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