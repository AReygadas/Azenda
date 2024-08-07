const express = require('express');

const AddressService = require('./../Services/AddressesService');
const multer = require('multer');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });
const service = new AddressService();

router.post('/upload-excel', upload.single('file'), async (req, res, next) => {
    try {
      const filePath = req.file.path;
      const result = await service.uploadExcel(filePath);
      res.status(201).json(result);
    } catch (error) {
      next(error);
    }
  });

router.get('/', async (req, res, next) => {
  try {
    const addresses = await service.find();
    res.json(addresses);
  } catch (error) {
    next(error);
  }
});

router.get('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const address = await service.findOne(id);
      res.json(address);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  async (req, res, next) => {
    try {
      const body = req.body;
      const newAddress = await service.create(body);
      res.status(201).json(newAddress);
    } catch (error) {
      next(error);
    }
  }
);

router.patch('/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const address = await service.update(id, body);
      res.json(address);
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

module.exports = router;
