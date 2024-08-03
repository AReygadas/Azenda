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

router.get('/CB', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesCB();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/CU', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesCU();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/H', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesH();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/IB', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesIB();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/O', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesO();
        res.json(properties);
    } catch (error) {
        next(error);
    }
});

router.get('/W', async (req, res, next) => {
    try {
        const properties = await service.getAllPropertiesW();
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

router.get('/CB/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneCB(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/CU/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneCU(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/H/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneH(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/IB/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneIB(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/O/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneO(id);
            res.json(property);
        } catch (error) {
            next(error);
        }
    }
);

router.get('/W/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const property = await service.findOneW(id);
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

router.post('/addCB',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createCB(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.post('/addCU',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createCU(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.post('/addH',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createH(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.post('/addIB',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createIB(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.post('/addO',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createO(body);
        res.status(201).json(newProperty);
    } catch (error) {
        next(error);
    }
});

router.post('/addW',async (req, res, next) => {
    try {
        const body = req.body;
        const newProperty = await service.createW(body);
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