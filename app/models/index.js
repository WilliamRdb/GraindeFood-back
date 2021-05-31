const User = require('./user');
const Promo = require('./promo');
const Order = require('./order');

User.hasMany(Order, {
    foreignKey: "user_id",
    as: "orders",
    onDelete: 'cascade', 
    hooks: true,
    
});
Order.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
    //onDelete: 'cascade', 
    //hooks: true,
    //foreignKey: { allowNull: false },
});

Promo.hasMany(Order, {
    foreignKey: "promo_id",
    as: "orders"

});
Order.belongsTo(Promo, {
    foreignKey: "promo_id",
    as: "promo"
});

module.exports = {User, Order, Promo};