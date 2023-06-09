'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: "Rocio",
        surname: "Sendros",
        dni: "45461238T",
        email: "rocio@sendros.com",
        password: "1234-rocio",
        role: 1,
        state: true,
      },
      {
        id: 2,
        name: "Ona",
        surname: "Grau",
        dni: "45462348T",
        email: "ona@grau.com",
        password: "1234-ona",
        role: 2,
        state: true,
      },
      {
        id: 3,
        name: "Espe",
        surname: "Cervera",
        dni: "12362348T",
        email: "espe@cervera.com",
        password: "1234-espe",
        role: 3,
        state: true,
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
