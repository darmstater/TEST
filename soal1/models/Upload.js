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
        },
        { tableName: "uploadfile", timestamps: true, paranoid: true}
    );
    return Upload;
};