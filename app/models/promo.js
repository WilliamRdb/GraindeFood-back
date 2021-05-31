const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Promo extends Model {};

Promo.init({
    code: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    pourcent: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    sequelize,
    tableName:"promo",
});

module.exports = Promo;