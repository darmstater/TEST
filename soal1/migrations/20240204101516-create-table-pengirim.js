'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pengirim", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nama:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      saldo:{
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pengirim")
  }
};
