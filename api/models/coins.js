'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coins extends Model {

    static associate(models) {
      // define association here
      coins.belongsTo(models.transactions, {
        foreignKey: 'transactions',
        onDelete: 'CASCADE'
      })
    }
  };
  coins.init({
    coin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fullname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amont: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    Transactions: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'transactions',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};