const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Umkm = sequelize.define('Umkm', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_umkm: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        alamat: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: 'umkm',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Umkm;
};
