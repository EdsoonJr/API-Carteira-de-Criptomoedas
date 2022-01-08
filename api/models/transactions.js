'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transactions extends Model {

    static associate(models) {
      // define association here
      transactions.hasMany(models.coins, {
        foreignKey: 'transactions'
      })
      transactions.belongsTo(models.coins, {
        foreignKey: 'transactions'
      })
    }
  };
  transactions.init({
    value: DataTypes.FLOAT,
    datetime: DataTypes.DATE,
    sendTo: DataTypes.INTEGER,
    receiveFrom: DataTypes.INTEGER,
    currentCotations: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'transactions',
  });
  return transactions;
};