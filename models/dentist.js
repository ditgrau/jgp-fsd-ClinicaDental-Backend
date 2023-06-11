'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dentist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Dentist.belongsTo(
        models.Specialty,
        {
          foreignKey: 'specialtyId'
        }
      )

      Dentist.belongsTo(
        models.User,
        {
          foreignKey: 'userId'
        }
      )

      Dentist.hasMany(
        models.Appointment,
        {
          foreignKey: 'dentistId'
        }
      )
    }
  }
  Dentist.init({
    userId: DataTypes.INTEGER,
    specialtyId: DataTypes.INTEGER,
    collegiate: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};