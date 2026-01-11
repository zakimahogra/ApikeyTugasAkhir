const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const ApiUser = sequelize.define('ApiUser', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        api_key: {
            type: DataTypes.STRING(64),
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'api_users',
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });

    return ApiUser;
};
