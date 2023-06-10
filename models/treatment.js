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
      Treatment.belongsToMany(
        models.Appointment,
        {
          through: 'Treat_appoint',
          foreignKey: 'treatmentId'
        }
      )
    }
  }
  Treatment.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    time_spent: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Treatment',
  });
  return Treatment;
};