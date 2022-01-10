'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    await queryInterface.bulkInsert('transactions', [
      {
      value: 0.0123110,
      datetime:new Date(),
      sendTo: 1,
      receiveFrom:1,
      currentCotations: 0.0143,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      value: 0.02547,
      datetime:new Date(),
      sendTo: 2,
      receiveFrom:1,
      currentCotations: 0.0125,
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      value: 0.045632,
      datetime:new Date(),
      sendTo: 3,
      receiveFrom:3,
      currentCotations: 0.0143,
      createdAt:new Date(),
      updatedAt:new Date()
    }
  ], {});

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('transactions', null, {});

  }
};