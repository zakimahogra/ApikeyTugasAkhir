const { sequelize } = require('../config/database');

// Import models
const ApiUser = require('./ApiUser')(sequelize);
const Umkm = require('./Umkm')(sequelize);
const Product = require('./Product')(sequelize);

// Define associations
Umkm.hasMany(Product, {
    foreignKey: 'umkm_id',
    as: 'products'
});

Product.belongsTo(Umkm, {
    foreignKey: 'umkm_id',
    as: 'umkm'
});

// Sync database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true });
        console.log('✅ Database synchronized successfully.');
    } catch (error) {
        console.error('❌ Error synchronizing database:', error.message);
    }
};

module.exports = {
    sequelize,
    ApiUser,
    Umkm,
    Product,
    syncDatabase
};
