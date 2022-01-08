'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Wallets', [{
        name: 'John Doe',
        cpf: 71246841455,
        birthdate: '2001/02/24',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Jhon Wick',
        cpf: 71246841455,
        birthdate: '2001/02/24',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Newton Pi',
        cpf: 71246841455,
        birthdate: '2001/02/24',
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Rolling Guedes',
        cpf: 71246841455,
        birthdate: '2001/02/24',
        createdAt: new Date(),
        updatedAt: new Date()
      }


    ], {});

  },

  down: async (queryInterface, Sequelize) => {


    await queryInterface.bulkDelete('Wallets', null, {});

  }
};