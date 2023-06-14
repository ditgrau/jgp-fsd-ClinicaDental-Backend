'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Dentists', [
      {
        id: 1,
        userId: 3, //ona
        specialtyId: 2, //ortodoncia
        collegiate: '456465'
      },
      {
        id: 2,
        userId: 4, //pedro
        specialtyId: 2, //ortodoncia
        collegiate: '198465'
      },
      {
        id: 3,
        userId: 5, //Espe
        specialtyId: 3, //cirugia
        collegiate: '756995'
      },
      {
        id: 4,
        userId: 11, //guille
        specialtyId: 3, //cirugia
        collegiate: '556465'
      },
      {
        id: 5,
        userId: 12, //nerea
        specialtyId: 4, //Estetica
        collegiate: '668465'
      },
      {
        id: 6,
        userId: 13, //mayte
        specialtyId: 4, //Estetica
        collegiate: '776995'
      },
      {
        id: 7,
        userId: 14, //lorenzo
        specialtyId: 5, //general
        collegiate: '886465'
      },
      {
        id: 8,
        userId: 15, //ana
        specialtyId: 5, //general
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
