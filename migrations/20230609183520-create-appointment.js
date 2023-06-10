'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id"
        },
      },
      dentist: {
        type: Sequelize.INTEGER,
        references: {
          model: "Dentists",
          key: "id"
        },
      },
      treatment: {
        type: Sequelize.INTEGER,
        references: {
          model: "Treatments",
          key: "id"
        },
      },
      date: {
        type: Sequelize.DATEONLY,
        //  '2022-01-17'
        required: true
      },
      time: {
        type: Sequelize.TIME,
        // "09:00:00"
        required: true
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};