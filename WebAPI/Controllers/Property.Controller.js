const express = require('express')
const router = express.Router()

const PropertyService = require('../Services/PropertyService')
const service = new PropertyService();

router.get('/',(req, res)=>{

})

router.post('/add',(req, res)=>{
    return('Ok')
})


module.exports = router