module.exports = (sequelize, DataTypes) => {
    const Karyawan = sequelize.define("Karyawan",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              name: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              jenis_kelamin: {
                type: DataTypes.STRING,
                values: ["Laki-laki", "Perempuan"],
                allowNull: false,
              },
              email: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              perusahaan_id:{
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              created_at: {
                type: DataTypes.DATE,
                allowNull: false,
              },
              updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
              },
              deleted_at: {
                type: DataTypes.DATE,
                allowNull: true,
              },
        },
        { tableName: "karyawan", timestamps: false, paranoid: true}
    );   
    return Karyawan;
};