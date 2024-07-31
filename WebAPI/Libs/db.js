const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'azenda_db',
    'root',
    'admin',
    {
        dialect: 'mysql',
        host: 'localhost', 
        port: 3306, 
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        },
        logging: false, // Set to true for debugging
    });

module.exports = sequelize;