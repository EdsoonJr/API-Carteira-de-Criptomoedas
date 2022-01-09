'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('coins', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coin: {
        allowNull: false,
        type: Sequelize.STRING
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false
      },
      amont: {
        type: Sequelize.FLOAT,
        allowNull: false
      },
      transactions:{
        allowNull:false,
        type:Sequelize.INTEGER,
        references:{model: 'transactions',key: 'id'}
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('coins');
  }
};