const boom = require('@hapi/boom');

const { models } = require('./../Libs/sequelize');

class PropertyService{
    constructor(){

    }
    async create(data) {
        const newProperty = await models.CommercialProperty.create(data);
        return newProperty;
    }
    async getAllProperties(){
        const rta = await models.CommercialProperty.findAll();
        return rta;
    }
    async findOne(id) {
        const property = await models.CommercialProperty.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async update(id, changes) {
        const property = await this.findOne(id);
        const rta = await property.update(changes);
        return rta;
    }
    async delete(id) {
        const property = await this.findOne(id);
        await property.destroy();
        return { id };
    }
}

module.exports = PropertyService;

