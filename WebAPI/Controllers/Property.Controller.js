const express = require('express')
const router = express.Router()

const PropertyService = require('../Services/PropertyService')
const service = new PropertyService();

router.get('/', async (req, res, next) => {
    try {
        const properties = await service.getAllProperties();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOne(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.create(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.patch('/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const property = await service.update(id, body);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      await service.delete(id);
      res.status(201).json({id});
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router