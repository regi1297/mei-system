'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Receitas extends Model {
    static associate(models) {
      // define association here if needed
    }
  }
  Receitas.init({
    descricao: DataTypes.STRING,
    data_recebimento: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    categoria: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Receitas',
  });
  return Receitas;
};
