'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dentists', [
      {
        id: 1,
        userId: 1,
        specialtyId: 3,
        collegiate: 456465
      },
      {
        id: 2,
        userId: 4,
        specialtyId: 2,
        collegiate: 198465
      },
      {
        id: 3,
        userId: 5,
        specialtyId: 1,
        collegiate: 756995,
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
