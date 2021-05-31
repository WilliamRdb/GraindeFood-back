const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class User extends Model {};

User.init({
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    delivery_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    invoice_address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    delivery_postcode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    invoice_postcode: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    delivery_city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    invoice_city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "USER"
    },
    vegan: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
}, {
    sequelize,
    tableName:"user",
    //timestamps:true,
});

module.exports = User;