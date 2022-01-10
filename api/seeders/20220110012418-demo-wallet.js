'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('wallets', [
    {
      name: "Roberts Dolvalds",
      cpf: 73265974156,
      birthdate: "2000/01/13",
      coins:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Lucas Raskovistisk",
      cpf: 65432198745,
      birthdate: "2003/04/26",
      coins:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      name: "Julia Gomes",
      cpf: 3698741252,
      birthdate: "1994/10/08",
      coins:1,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('wallets', null, {});

  }
};