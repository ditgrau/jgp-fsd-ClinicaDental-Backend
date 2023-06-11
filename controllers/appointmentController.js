const { Appointment , User} = require ('../models');
const appoinmentController = {};

/////////////////////////////////////////////////////////////

appoinmentController.newAppoint = async (req, res) => {
  try {
    const myId = req.userId //lo saco del token
    const {date, time} = req.body;
    const newAppoint = await Appointment.create({
        userId: myId,
        dentistId: 3, //////no lo va a coger no tengo la tabla ni los seedersss
        date: date,
        time: time
    })
    
  } catch (error) {
    return res.status(500).json({
      success: false, 
      message: "Server error",
      error: error.message
    })
    
  }
}


/////////////////////////////////////////////////////////////

module.exports = appoinmentController;
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