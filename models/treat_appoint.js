'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Treat_appoint extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Treat_appoint.init({
    treatmentId: DataTypes.INTEGER,
    appointmentId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Treat_appoint',
  });
  return Treat_appoint;
};