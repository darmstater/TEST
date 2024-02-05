module.exports = (sequelize, DataTypes) => {
    const Pengirim = sequelize.define("Pengirim",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              nama:{
                type: DataTypes.STRING,
                allowNull: false,
              },
              saldo:{
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0,
              },
        },
        { tableName: "pengirim", timestamps: false, paranoid: true}
    );   
    return Pengirim;
};