'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {

    static associate(models) {
      // define association here
      
    }
  };
  transactions.init({
    value: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    sendTo: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    receiveFrom: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    currentCotations: {
      type: DataTypes.FLOAT,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};