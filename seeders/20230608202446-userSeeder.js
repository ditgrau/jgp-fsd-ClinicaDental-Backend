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
        password: "$2b$10$m5yJaaFX4Tm0MhUZDiuYnOmp2DJUpDjcXHZ1D75D72UBqey3WS/r6", //1234-rocio
        role: 1,
        state: true,
      },
      {
        id: 2,
        name: "Marcos",
        surname: "Garrido",
        dni: "45451238T",
        email: "marcos@email.com",
        password: "$2b$10$s52uex07GIMMNrK8qQ8z2uOWqZG3VZyoXOi5a0G3AWlbim15Ioa6C", //1234-marcos
        role: 1,
        state: true,
      },
      {
        id: 3,
        name: "Ona",
        surname: "Grau",
        dni: "45462348T",
        email: "ona@email.com",
        password: "$2b$10$K4KQ8kGz9fO5pI0Dh.OO4eM6Dn0IhDBBDzSatbI4pzFEg3YKHiN0.", //1234-ona
        role: 2,
        state: true,
      },
      {
        id: 4,
        name: "Pedro",
        surname: "Lopez",
        dni: "12362356T",
        email: "pedro@email.com",
        password: "$2b$10$/RHiejHQk4WiLgdxE06tcej6deGGsZXUNg0XErhtcn8AUXUnYMO2m", //1234-pedro
        role: 2,
        state: false,
      },
      {
        id: 5,
        name: "Espe",
        surname: "Cervera",
        dni: "12362348T",
        email: "espe@email.com",
        password: "$2b$10$psqVTqGsdS5lo/o1qxnn2.Gd51lEE0t0IMEzzPKDbtMXESvG7e106", //1234-espe
        role: 3,
        state: true,
      },
      {
        id: 6,
        name: "Mateo",
        surname: "Andrada",
        dni: "12362348T",
        email: "mateo@email.com",
        password: "$2b$10$FKlJRat0a/fVK.TgQqUkzu7TrKk41ZIYOHwt.VGYaSIXrKsdTDfYC", //1234-mateo
        role: 3,
        state: false,
      },
      {
        id: 7,
        name: "Gema",
        surname: "Duato",
        dni: "12362348T",
        email: "gema@email.com",
        password: "$2b$10$YovmUTgzfhlUXhMEK01Wv.VNrxKWrTKmAUe2XfZt0iXhWj81QFbgu", //1234-gema
        role: 3,
        state: true,
      },
      {
        id: 8,
        name: "Paula",
        surname: "Tudon",
        dni: "12362348T",
        email: "paula@email.com",
        password: "$2b$10$wCgi3KhJRuYDRegLuw3YSuicH/864Q2uGGN3jGWx.7phn/oG3afou", //1234-paula
        role: 3,
        state: true,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
