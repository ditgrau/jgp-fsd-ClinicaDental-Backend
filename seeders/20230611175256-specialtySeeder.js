'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Specialties', [
      {
        id: 1,
        name: "Ortodoncia"
      },
      {
        id: 2,
        name: "Cirugía oral"
      },
      {
        id: 3,
        name: "Estética"
      },
      {
        id: 4,
        name: "General"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
