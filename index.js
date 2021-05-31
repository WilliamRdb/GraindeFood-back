const dotenv = require('dotenv').config();
const stripe = require('stripe')('sk_test_51IkqSgJg8u3w3UyQhjUJTIUYy5Kj4KyNek5STBC7CmheIEP5dxihAxgYS3TDj6TFSCJtCFP61uortmUhU8BUCVGw00V4xiEFCb');
const express = require('express');
const app = express();

const multer = require('multer');
const bodyParser = multer();
const sanitizer = ('sanitizer');
const cors = require('cors');
const router= require('./app/router');

const bodySanitizer = require('./app/middlewares/body-sanitizer');
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(bodyParser.none());
app.use(bodySanitizer);

app.post('/payment', async (req, res) => {
    const { amount, id } = req.body;
    try{
    const payment = await stripe.paymentIntents.create({
        amount: amount,
        currency: "EUR",
        description:"Abonnement BoxFood",
        payment_method: id,
        confirm: true
    });
    console.log("payment:", payment);
    res.json({
        message: "Payment successful",
        success: true
    })
    } catch (error) {
        console.log("Error: ", error);
        res.json({
            message: "Payment failed",
            success: false
        })
    }
});

app.use(router);

app.listen(process.env.PORT, console.log(`App open on Port:${process.env.PORT}`));