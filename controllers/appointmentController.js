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