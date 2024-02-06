'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("karyawan", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      jenis_kelamin: {
        type: Sequelize.STRING,
        values: ["Laki-laki", "Perempuan"],
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      perusahaan_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        field: "updated_at",
        type: Sequelize.DATE,
        allowNull: true,
      },
      deletedAt: {
        field: "deleted_at",
        type: Sequelize.DATE,
        allowNull: true,
      },
    })
    await queryInterface.addConstraint("karyawan", {
      type: "foreign key",
      name: "karyawan_perusahaan",
      fields: ["perusahaan_id"],
      references: {
        table: "perusahaan",
        field: "id",
      },
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("karyawan")
  }
};
