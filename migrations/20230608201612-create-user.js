'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      surname: {
        type: Sequelize.STRING
      },
      dni: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true,
        unique: true
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
        required: true
      },
      role: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id"
        },
        defaultValue: 3,
      },
      state:{
        type: Sequelize.BOOLEAN,
        defaultValue: true,
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
    await queryInterface.dropTable('Users');
  }
};