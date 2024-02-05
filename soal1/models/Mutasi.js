module.exports = (sequelize, DataTypes) => {
    const Mutasi = sequelize.define("Mutasi",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
              },
              pengirim_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              penerima_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
              },
              jumlah_transfer: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
              },
              waktu_transfer: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
              },
        },
        { tableName: "mutasi", timestamps: false, paranoid: true}
    );   
    return Mutasi;
};