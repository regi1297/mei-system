// migration/dividas.js
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Dividas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      credor: {
        type: Sequelize.STRING
      },
      data_inicial: {
        type: Sequelize.DATE
      },
      valor_parcela: {
        type: Sequelize.FLOAT
      },
      num_parcelas: {
        type: Sequelize.INTEGER
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      juros: {
        type: Sequelize.FLOAT
      },
      motivo: {
        type: Sequelize.STRING
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Dividas');
  }
};