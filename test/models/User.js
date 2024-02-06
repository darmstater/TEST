module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
              },
              email: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              password: {
                type: DataTypes.STRING,
                allowNull: false,
              },
              token:{
                type: DataTypes.STRING,
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
        { tableName: "user", timestamps: false, paranoid: true}
    );   
    return User;
};