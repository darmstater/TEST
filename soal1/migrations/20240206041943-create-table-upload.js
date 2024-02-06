'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async  (queryInterface, Sequelize) => {
    await queryInterface.createTable("upload", {
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
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      deleted_at: {
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
  },

  down: async  (queryInterface, Sequelize) => {
    await queryInterface.dropTable("upload")
  }
};
