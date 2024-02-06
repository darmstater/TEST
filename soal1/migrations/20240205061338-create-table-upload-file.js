'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await queryInterface.createTable("uploadfile", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      Keterangan:{
        type: Sequelize.STRING,
        allowNull: true,
      },
      filepdf:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      filefoto:{
        type: Sequelize.STRING,
        allowNull: false,
      },
    })
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable("uploadfile")
  }
};
