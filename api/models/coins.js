'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class coins extends Model {
    
    static associate(models) {
      // define association here
      Coins.hasMany(models.Wallets,{foreignKey: 'coins'})
      Coins.belongsTo(models.Wallets,{foreignKey: 'coins'})
    }
  };
  coins.init({
    coin: DataTypes.STRING,
    fullname: DataTypes.STRING,
    amont: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'coins',
  });
  return coins;
};