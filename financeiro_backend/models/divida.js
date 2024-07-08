// models/dividas.js
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Divida extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Divida.init({
    credor: DataTypes.STRING,
    data_inicial: DataTypes.DATE,
    valor_parcela: DataTypes.FLOAT,
    num_parcelas: DataTypes.INTEGER,
    valor_total: DataTypes.FLOAT,
    juros: DataTypes.FLOAT,
    motivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Divida',
  });
  return Divida;
};