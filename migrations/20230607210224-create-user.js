'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        required: true
      },
      surname: {
        type: Sequelize.STRING
      },
      birth_date: {
        type: Sequelize.DATE
      },
      email: {
        type: Sequelize.STRING,
        required: true
      },
      password: {
        type: Sequelize.STRING,
        required: true
      },
      role_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Roles",
          key: "id",
        },
        defaultValue: 3
      },
      state: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};