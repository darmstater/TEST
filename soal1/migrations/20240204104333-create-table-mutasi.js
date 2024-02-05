'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("mutasi", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      pengirim_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      penerima_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      jumlah_transfer: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      waktu_transfer: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    })

    await queryInterface.addConstraint("mutasi", {
      type: "foreign key",
      name: "penerima",
      fields: ["penerima_id"],
      references: {
        table: "penerima",
        field: "id",
      }    
    })

    await queryInterface.addConstraint("mutasi", {
      type: "foreign key",
      name: "pengirim",
      fields: ["pengirim_id"],
      references: {
        table: "pengirim",
        field: "id",
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("mutasi")
  }
};
