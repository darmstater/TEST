module.exports = (sequelize, DataTypes) => {
    const Penerima = sequelize.define("Penerima",
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
        { tableName: "penerima", timestamps: false, paranoid: true}
    );   
    return Penerima;
};