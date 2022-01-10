'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('coins', [
      {
      coin: "BRL",
      fullname: "Real",
      amont: 112.0,
      transactions:1,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      coin: "ETH",
      fullname: "Etherium",
      amont: 76.0,
      transactions:2,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      coin: "BRL",
      fullname: "Real",
      amont: 258.0,
      transactions:3,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('coins', null, {});

  }
};