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
      // define association here
      Appointment.belongsTo(
        models.User,
        {
          foreignKey: 'userId'
        }
      )

      Appointment.belongsTo(
        models.Dentist,
        {
          foreignKey: 'dentistId'
        }
      )
    }
  }
  Appointment.init({
    userId: DataTypes.INTEGER,
    dentistId: DataTypes.INTEGER,
    date: DataTypes.DATEONLY,
    hour: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'Appointment',
  });
  return Appointment;
};