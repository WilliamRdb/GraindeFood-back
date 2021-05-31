const { Order } = require('../models');

const orderController = {
    getOrders: async (req, res) => {
        const orders = await Order.findAll()
        try {
            res.json({
                succes:true,
                orders
            })
        }
        catch {
           res.sendStatus(404) 
        }
    },

    createOrder: async (req, res) => {

         const orderData = req.body;

        Order.create(orderData).then(order => {
            res.json({
                success: true,
                order
            });
        }).catch(error => {
            res.status(500).json({
                success: false,
                error: error.message
            });
        });
        
    }

}

module.exports = orderController;