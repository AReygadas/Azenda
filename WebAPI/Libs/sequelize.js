const{Sequelize}=require('sequelize');

const{config}=require('./../config/config');
const setupModels = require('../Models/index')

const USER=encodeURIComponent(config.dbUser);
const PASSWORD=encodeURIComponent(config.dbPassword);
const URI=`mysql://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
const URIremote ='mysql://mysql:yqRGnA64GJ4L@@85.31.225.77:1/azendaapi'
const sequelize=new Sequelize(URIremote,{
    dialect:'mysql',
    logging:false,
});


setupModels(sequelize);
sequelize.sync();

module.exports=sequelize;