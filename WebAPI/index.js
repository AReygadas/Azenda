const express = require('express');
const cors = require('cors')
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');

const controllers = require('./Controllers')
const yaml = require('yamljs');
const fs = require('fs');


const app = express()
const port = 5703;

app.use(express.json());

const whitelist = ['http://localhost:3000', 'https://azenda.com'];
const corsoptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  },
  credentials: false,
  optionsSuccessStatus: 200
}
app.use(cors());

controllers(app);

app.get('/', (req, res) =>{
    res.send('Get server on port ->'+port)
})

app.listen(port, ()=>{
    console.log('Server on port '+port);
});


// Opciones de Swagger
const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: "Azenda API Express",
      version: "1.0.0",
    },
    servers: [
      {
        url: "http://localhost:5703",
      },
    ],
  },
  apis: ["./Controllers/*.js"], // Ruta a tus archivos de rutas
};

// Generar la especificación Swagger
const swaggerSpec = swaggerJsdoc(options);


// Servir la documentación en la ruta /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
