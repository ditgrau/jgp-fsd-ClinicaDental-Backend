'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Specialties', [
      {
        id: 1,
        name: "You must change your specialty"
      },{
        id: 2,
        name: "Ortodoncia"
      },
      {
        id: 3,
        name: "Cirugía oral"
      },
      {
        id: 4,
        name: "Estética"
      },
      {
        id: 5,
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
