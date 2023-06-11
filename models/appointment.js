'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Appointment.hasOne(
      //   models.User,
      //   {
      //     foreignKey: 'userId'
      //   }
      // )

      Appointment.hasOne(
        models.Dentist,
        {
          foreignKey: 'dentistId'
        }
      )

      Appointment.belongsToMany(
        models.Treatment,
        {
          through: 'Treat_appoint',
          foreignKey: 'appointmentId'
        }
      )
    }
  }
  Appointment.init({
    userId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    time: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};