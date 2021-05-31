const { DataTypes, Model} = require('sequelize');
const sequelize = require('../database');

class Order extends Model {};

Order.init({
    start_subscribe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    end_subscribe: {
        type: DataTypes.DATE,
        allowNull: false
    },
    amount: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    points: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updated_at: {
        type: DataTypes.DATE,
        allowNull: false
    },

}, {
        sequelize,
        tableName:"order", 
        timestamps:true  
});

module.exports = Order;