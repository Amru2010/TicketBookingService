const express = require('express');

const bookingController=require('../../controllers/booking-controller');

const router=express.Router();

router.post('/bookings',bookingController.create);

module.exports=router;