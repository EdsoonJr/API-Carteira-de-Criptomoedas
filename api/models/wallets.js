'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Wallets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wallets.belongsTo(models.coins, {
        foreignKey: 'coins',
        onDelete: 'CASCADE'
      })
    }
  };
  Wallets.init({
    address: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cpf: {
      type: DataTypes.STRING,
      allowNull: false
    },

    birthdate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    
    coins: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'coins',
        key: 'id'
      }
    }

  }, {
    sequelize,
    modelName: 'Wallets',
  });
  return Wallets;
};