const boom = require('@hapi/boom');

const { models } = require('./../Libs/sequelize');

class AddressesService {
  constructor() {}

  async create(data) {
    console.log(data);
    const newAddress = await models.Addresses.create(data);
    return newAddress;
  }
  
  async find() {
    const rta = await models.Addresses.findAll();
    return rta;
  }

  async findOne(id) {
    const address = await models.Addresses.findByPk(id);
    if (!address) {
      throw boom.notFound('Address not found');
    }
    return address;
  }

  async update(id, changes) {
    const address = await this.findOne(id);
    const rta = await address.update(changes);
    return rta;
  }

  async delete(id) {
    const address = await this.findOne(id);
    await address.destroy();
    return { id };
  }
}

module.exports = AddressesService;