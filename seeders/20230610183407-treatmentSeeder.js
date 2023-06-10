'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Treatments', [
      {
        id: 1,
        name: "Revision general",
        price: 30.5,
        time_spent: 30
      },
      {
        id: 2,
        name: "Limpieza bucal",
        price: 40,
        time_spent: 20
      },
      {
        id: 3,
        name: "Blanqueamiento",
        price: 60,
        time_spent: 45
      },
      {
        id: 4,
        name: "Extraccion",
        price: 75,
        time_spent: 60
      },
      {
        id: 5,
        name: "Implantes",
        price: 850,
        time_spent: 90
      },
      {
        id: 6,
        name: "Revision ortodoncia",
        price: 25.5,
        time_spent: 15
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
