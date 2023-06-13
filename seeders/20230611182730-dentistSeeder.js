'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dentists', [
      {
        id: 1,
        userId: 3,
        specialtyId: 2,
        collegiate: '456465'
      },
      {
        id: 2,
        userId: 4,
        specialtyId: 2,
        collegiate: '198465'
      },
      {
        id: 3,
        userId: 5,
        specialtyId: 3,
        collegiate: '756995'
      },
      {
        id: 4,
        userId: 11,
        specialtyId: 3,
        collegiate: '556465'
      },
      {
        id: 5,
        userId: 12,
        specialtyId: 4,
        collegiate: '668465'
      },
      {
        id: 6,
        userId: 13,
        specialtyId: 4,
        collegiate: '776995'
      },
      {
        id: 7,
        userId: 14,
        specialtyId: 5,
        collegiate: '886465'
      },
      {
        id: 8,
        userId: 15,
        specialtyId: 5,
        collegiate: '998465'
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
