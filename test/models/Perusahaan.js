module.exports = (sequelize , DataTypes) => {
    const Perusahaan = sequelize.define("Perusahaan",
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
            createdAt: {
                field: "created_at",
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                field: "updated_at",
                type: DataTypes.DATE,
                allowNull: true,
            },
              deletedAt: {
                field: "deleted_at",
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        { tableName: "perusahaan", timestamps: true, paranoid: true}    
    );
    // Perusahaan.hasMany(Karyawan);
    return Perusahaan;
};