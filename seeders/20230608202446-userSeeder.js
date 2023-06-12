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
        role: 2,
        state: true,
      },
      {
        id: 6,
        name: "Mateo",
        surname: "Andrada",
        dni: "12362338T",
        email: "mateo@email.com",
        password: "$2b$10$FKlJRat0a/fVK.TgQqUkzu7TrKk41ZIYOHwt.VGYaSIXrKsdTDfYC", //1234-mateo
        role: 3,
        state: false,
      },
      {
        id: 7,
        name: "Gema",
        surname: "Duato",
        dni: "15662348T",
        email: "gema@email.com",
        password: "$2b$10$YovmUTgzfhlUXhMEK01Wv.VNrxKWrTKmAUe2XfZt0iXhWj81QFbgu", //1234-gema
        role: 3,
        state: true,
      },
      {
        id: 8,
        name: "Paula",
        surname: "Tudon",
        dni: "12362399T",
        email: "paula@email.com",
        password: "$2b$10$wCgi3KhJRuYDRegLuw3YSuicH/864Q2uGGN3jGWx.7phn/oG3afou", //1234-paula
        role: 3,
        state: true,
      },
      {
        id: 9,
        name: "Roberto",
        surname: "Mari",
        dni: "12444399T",
        email: "roberto@email.com",
        password: "$2b$10$T.wL9oT2qT1mEebU3hhHPOCXfuNkcCq6Dtguq00vUF6cY0IudcsVS", //1234-roberto
        role: 3,
        state: true,
      },
      {
        id: 10,
        name: "Martina",
        surname: "Suarez",
        dni: "111111P",
        email: "martina@email.com",
        password: "$2b$10$Ddp3ioetRhw1UCDL79eJBurbhcHfgyxdiWYk9KzhcKZyypFCAW5qK", //1234-martina
        role: 3,
        state: true,
      },
      {
        id: 11,
        name: "Guille",
        surname: "Gil",
        dni: "45461999T",
        email: "guille@email.com",
        password: "$2b$10$U/wMhUklOYW1xM4T4Fu22..5WAsyVVvDtyMBUT079JHEe.bESSj7i", //1234-guille
        role: 2,
        state: true,
      },
      {
        id: 12,
        name: "Nerea",
        surname: "Peinado",
        dni: "454512789T",
        email: "nerea@email.com",
        password: "$2b$10$cia3kBkES/LLUsKDuHBNM.3IfuGT7qmLBWSDO84MymKK7Nvgsv.IK", //1234-nerea
        role: 2,
        state: true,
      },
      {
        id: 13,
        name: "Mayte",
        surname: "Naranjo",
        dni: "45666348T",
        email: "mayte@email.com",
        password:"$2b$10$nFowF/mC.5.Sq/RxbwRNruv9Z3jWL9vY4YsbYNuMJEMyEG46DQY3e", //1234-mayte
        role: 2,
        state: true,
      },
      
      {
        id: 14,
        name: "Lorenzo",
        surname: "Iborra",
        dni: "12367776T",
        email: "lorenzo@email.com",
        password:"$2b$10$kHJ1AXiceqYwuGd8sDxY/.9LAP47Hv8ij7JTzb8rocjHeFVlW27wi", //1234-lorenzo
        role: 2,
        state: false,
      },
      {
        id: 15,
        name: "Ana",
        surname: "Llopis",
        dni: "123622228T",
        email: "ana@email.com",
        password: "$2b$10$L8EA/VBXSbSmuXRBfzMoTuP8agGrpgJKL/aJxS5CUlAOxPOQ5L4vO", //1234-ana
        role: 2,
        state: true,
      },
      {
        id: 16,
        name: "Mario",
        surname: "Millan",
        dni: "123111338T",
        email: "mario@email.com",
        password: "$2b$10$YF.SWAKVXwDmc77.EGW7iOZFEWpy6s0Mo8vusb/xa.1Afw0Igloo.", //1234-mario
        role: 3,
        state: false,
      },
      {
        id: 17,
        name: "Esther",
        surname: "Valencia",
        dni: "19872348T",
        email: "esther@email.com",
        password:"$2b$10$0YYwu7sqEf/R5P7rHMbpIubTEPCi2YPfNCHFrZK57HFizLBwlrwkm", //1234-esther
        role: 3,
        state: true,
      },
      {
        id: 18,
        name: "Nacho",
        surname: "Grande",
        dni: "99362399T",
        email: "nacho@email.com",
        password:"$2b$10$LMmgBR0jzjNK1T3haCcYD.oOUPb6UWswia9HDVNPW.B5kUDK7hNhS", //1234-nacho
        role: 3,
        state: true,
      },
      {
        id: 19,
        name: "Ula",
        surname: "John",
        dni: "19872348T",
        email: "ula@email.com",
        password:"$2b$10$hzPEWjl49..j7kpsEEhV.e//7VSB0XHKMCbzMS2ZdKJVYeFSVg/G6", //1234-ula
        role: 2,
        state: true,
      },
      {
        id: 20,
        name: "Enric",
        surname: "Carbonell",
        dni: "99362399T",
        email: "enric@email.com",
        password:"$2b$10$vT/LUwzzgXH8D0FYVLfCDu1PM8YpyErndXpksHBkmXfS2PzNbNLou", //1234-enric
        role: 2,
        state: true,
      }
    ])
  },

  async down (queryInterface, Sequelize) {
  }
};
