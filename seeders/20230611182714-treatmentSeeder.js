'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Treatments', [
      {
        id: 1,
        specialtyId: 5, //general
        name: "Revision general",
        price: 30.5,
        time: 30
      },
      {
        id: 2,
        specialtyId: 5, //general
        name: "Limpieza bucal",
        price: 40,
        time: 20
      },
      {
        id: 3,
        specialtyId: 4, //estetica
        name: "Blanqueamiento",
        price: 60,
        time: 45
      },
      {
        id: 4,
        specialtyId: 3, //cirugia
        name: "Extraccion",
        price: 75,
        time: 60
      },
      {
        id: 5,
        specialtyId: 3, //cirugia
        name: "Implantes",
        price: 850,
        time: 90
      },
      {
        id: 6,
        specialtyId: 2, //ortodoncia
        name: "Revision ortodoncia",
        price: 25.5,
        time: 15
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};