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
        models.Appointment, 
        {
          foreignKey: 'dentistId'
        }
      )

    }
  }
  Dentist.init({
    collegiate: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    treatmentId: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Dentist',
  });
  return Dentist;
};