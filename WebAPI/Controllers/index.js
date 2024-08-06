const express = require('express');
const UsersController = require('./User.Controller');
const PropertyController = require('./Property.Controller');
const AddressController = require('./Addresses.Controller');

function controllers(app){
   
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', UsersController);
    router.use('/router', PropertyController);
    router.use('/address', AddressController);
    // router.use('/mail', MailController);

} 

module.exports = controllers;