'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Appointments', [
      {
        id: 1,
        userId: 8,
        dentistId: 3,
        treatmentId: 2,
        date: '2023-06-07',
        hour: '11:30:00'
      },
      {
        id: 2,
        userId: 7,
        dentistId: 2,
        treatmentId: 1,
        date: '2024-01-17',
        hour: '10:30:00'
      },
      {
        id: 3,
        userId: 6,
        dentistId: 1,
        treatmentId: 3,
        date: '2023-11-27',
        hour: '13:30:00'
      },
      {
        id: 4,
        userId: 6,
        dentistId: 2,
        treatmentId: 5,
        date: '2023-10-10',
        hour: '16:00:00'
      },
      {
        id: 5,
        userId: 7,
        dentistId: 1,
        treatmentId: 4,
        date: '2023-07-09',
        hour: '10:30:00'
      },
      {
        id: 6,
        userId: 8,
        dentistId: 3,
        treatmentId: 6,
        date: '2023-06-08',
        hour: '10:00:00'
      },
      {
        id: 7,
        userId: 8,
        dentistId: 3,
        treatmentId: 5,
        date: '2023-09-12',
        hour: '10:30:00'
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
