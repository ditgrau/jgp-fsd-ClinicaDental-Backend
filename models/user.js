'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(
        models.Role,
        {
          foreignKey: 'role'
        }
      )

      User.hasOne(
        models.Dentist,
        {
          foreignKey: 'userId'
        }
      )

      User.hasMany(
        models.Appointment,
        {
          foreignKey: 'userId'
        }
      )

      // User.belongsTo(
      //   models.Appointment,
      //   {
      //     foreignKey: 'userId'
      //   }
      // )
    
    }
  }
  
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.INTEGER,
    state: DataTypes.BOOLEAN
 
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};