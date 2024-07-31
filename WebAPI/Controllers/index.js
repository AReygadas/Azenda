const express = require('express');
const UsersController = require('./User.Controller');
const PropertyController = require('./Property.Controller');
// const MailController = require('./Mail.Controller');
function controllers(app){
   
    const router = express.Router();
    app.use('/api/v1', router);
    router.use('/user', UsersController);
    router.use('/router', PropertyController);
    // router.use('/mail', MailController);

} 

module.exports = controllers;