'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receita extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  Receita.init({
    descricao: DataTypes.STRING,
    data_recebimento: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receita',
  });
  return Receita;
};
