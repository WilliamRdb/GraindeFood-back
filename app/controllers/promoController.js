const { Promo } = require('../models');

const promoController = {
    promos : (req,res) => {
        Promo.findAll(). then( promos => {
   
                if(!promos) {
                    throw new Error("Promos not found");
                }
    
                res.json({
                    success: true,
                    promos
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },

    createPromo : (req,res) => {
        const newPromo = req.body;
        console.log(newPromo);
        Promo.create(newPromo). then( promo => {
                res.json({
                    success: true,
                    promo
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },

    getPromoByCode: (req,res) => {
        const codename = req.params.code;
        console.log(codename);
        Promo.findOne({ 
            where: { 
                code: codename,
            } 
        }). then( promo => {
                res.json({
                    success: true,
                    promo
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },

    updatePromo: (req,res) => {
        const promodata = req.body;
        const codename = req.params.code;
        console.log(codename);
        Promo.findOne({ 
            where: { 
                code: codename,
            } 
        }).then ( promo => {
            if(!promo) {
                throw new Error("Promo not found");
            }

            return promo.update(promodata);
        }). then( promo => {
                res.json({
                    success: true,
                    promo
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },
    deletePromo: (req,res) => {
        const codename = req.params.code;
        Promo.findOne({ 
            where: { 
                code: codename,
            } 
        }).then ( promo => {
            if(!promo) {
                throw new Error("Promo not found");
            }

            return promo.destroy();
        }). then(() => {
                res.json({
                    success: true,
                });
            }).catch(error => {
                res.status(500).json({
                    success: false,
                    error: error.message
                });
            });
        },
};



module.exports = promoController;