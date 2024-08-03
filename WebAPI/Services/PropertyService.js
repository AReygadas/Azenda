const boom = require('@hapi/boom');

const { models } = require('./../Libs/sequelize');

class PropertyService{
    constructor(){

    }

    async create(data) {
        const newProperty = await models.CommercialProperty.create(data);
        return newProperty;
    }
    async createCB(data) {
        const newProperty = await models.CommercialBuilding.create(data);
        return newProperty;
    }
    async createCU(data) {
        const newProperty = await models.CommercialUnit.create(data);
        return newProperty;
    }
    async createH(data) {
        const newProperty = await models.Hotel.create(data);
        return newProperty;
    }
    async createIB(data) {
        const newProperty = await models.IndustrialBuilding.create(data);
        return newProperty;
    }
    async createO(data) {
        const newProperty = await models.Office.create(data);
        return newProperty;
    }
    async createW(data) {
        const newProperty = await models.Warehouse.create(data);
        return newProperty;
    }

    async getAllProperties(){
        const rta = await models.CommercialProperty.findAll();
        return rta;
    }
    async getAllPropertiesCB(){
        const rta = await models.CommercialBuilding.findAll();
        return rta;
    }
    async getAllPropertiesCU(){
        const rta = await models.CommercialUnit.findAll();
        return rta;
    }
    async getAllPropertiesH(){
        const rta = await models.Hotel.findAll();
        return rta;
    }
    async getAllPropertiesIB(){
        const rta = await models.IndustrialBuilding.findAll();
        return rta;
    }
    async getAllPropertiesO(){
        const rta = await models.Office.findAll();
        return rta;
    }
    async getAllPropertiesW(){
        const rta = await models.Warehouse.findAll();
        return rta;
    }

    async findOne(id) {
        const property = await models.CommercialProperty.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneCB(id) {
        const property = await models.CommercialBuilding.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneCU(id) {
        const property = await models.CommercialUnit.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneH(id) {
        const property = await models.Hotel.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneIB(id) {
        const property = await models.IndustrialBuilding.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneO(id) {
        const property = await models.Office.findByPk(id);
        if (!property) {
            throw boom.notFound('user not found');
        }
        return property;
    }
    async findOneW(id) {
        const property = await models.Warehouse.findByPk(id);
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

