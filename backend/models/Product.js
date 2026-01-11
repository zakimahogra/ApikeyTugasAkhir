const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        umkm_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'umkm',
                key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE'
        },
        nama_produk: {
            type: DataTypes.STRING(150),
            allowNull: false
        },
        kategori: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        harga: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        }
    }, {
        tableName: 'products',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return Product;
};
