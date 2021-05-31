const express = require('express');
const router = express.Router();

const signupController = require('./controllers/signupController');
const promoController = require ('./controllers/promoController');
const orderController = require('./controllers/orderController');
const userController = require('./controllers/userController');


router.post('/login', signupController.login);

router.get('/promos', promoController.promos);
router.get('/orders', orderController.getOrders);
router.post('/order', orderController.createOrder);
router.post('/promo', promoController.createPromo);
router.get('/promo/:code', promoController.getPromoByCode);
router.put('/promo/:code', promoController.updatePromo);
router.delete('/promo/:code', promoController.deletePromo);

router.get('/users', userController.getAllUsers);
router.get('/user/:id', userController.getUserById);
router.put('/user/:id', userController.updateUser);
router.delete('/user/:id', userController.deleteUser);

router.post('/signup', signupController.signup);

module.exports = router;

