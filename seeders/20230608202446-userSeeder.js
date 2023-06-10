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
        email: "rocio@email.com",
        password: "1234-rocio",
        role: 1,
        state: true,
      },
      {
        id: 2,
        name: "Marcos",
        surname: "Garrido",
        dni: "45451238T",
        email: "marcos@email.com",
        password: "1234-marcos",
        role: 1,
        state: true,
      },
      {
        id: 3,
        name: "Ona",
        surname: "Grau",
        dni: "45462348T",
        email: "ona@email.com",
        password: "1234-ona",
        role: 2,
        state: true,
      },
      {
        id: 4,
        name: "Pedro",
        surname: "Lopez",
        dni: "12362356T",
        email: "pedro@email.com",
        password: "1234-pedro",
        role: 2,
        state: false,
      },
      {
        id: 5,
        name: "Espe",
        surname: "Cervera",
        dni: "12362348T",
        email: "espe@email.com",
        password: "1234-espe",
        role: 3,
        state: true,
      },
      {
        id: 6,
        name: "Mateo",
        surname: "Andrada",
        dni: "12362348T",
        email: "mateo@email.com",
        password: "1234-mateo",
        role: 3,
        state: false,
      },
      {
        id: 7,
        name: "Gema",
        surname: "Duato",
        dni: "12362348T",
        email: "gema@email.com",
        password: "1234-gema",
        role: 3,
        state: true,
      },
      {
        id: 8,
        name: "Paula",
        surname: "Tudon",
        dni: "12362348T",
        email: "paula@email.com",
        password: "1234-paula",
        role: 3,
        state: true,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
