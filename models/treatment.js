'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treatment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Treatment.belongsTo(
        models.Specialty,
        {
          foreignKey: 'specialtyId'
        }
      )
      Treatment.hasMany(
        models.Appointment,
        {
          foreignKey: 'treatmentId'
        }
      )
    }
  }
  Treatment.init({
    specialtyId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    time: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};