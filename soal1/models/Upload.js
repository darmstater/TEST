module.exports = (sequelize, DataTypes) => {
    const Upload = sequelize.define("Upload",
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            keterangan:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            filepdf:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            filefoto:{
                type: DataTypes.STRING,
                allowNull: false,
            },
            createdAt: {
              field: "created_at", // adjust the field name if necessary
              type: DataTypes.DATE,
              allowNull: false,
            },
            updatedAt: {
              field: "updated_at", // adjust the field name if necessary
              type: DataTypes.DATE,
              allowNull: false,
            },
        },
        { tableName: "upload", timestamps: true, paranoid: true}
    );
    return Upload;
};