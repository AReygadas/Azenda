const { User, UserSchema } = require('./User');
const { CommercialProperty, CommercialPropertySchema } = require('./data');
const { CommercialBuilding, CommercialBuildingSchema } = require('./CommercialBuilding');
const { CommercialUnit, CommercialUnitSchema } = require('./CommercialUnit');
const { Hotel, HotelSchema } = require('./hotel');
const { IndustrialBuilding, IndustrialBuildingSchema } = require('./IndustrialBuilding');
const { Office, OfficeSchema } = require('./Office');
const { Warehouse, WarehouseSchema } = require('./Warehouse');


function setupModels(sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Office.init(OfficeSchema, Office.config(sequelize));
  CommercialProperty.init(CommercialPropertySchema, CommercialProperty.config(sequelize));
  CommercialBuilding.init(CommercialBuildingSchema, CommercialBuilding.config(sequelize));
  CommercialUnit.init(CommercialUnitSchema, CommercialUnit.config(sequelize));
  Hotel.init(HotelSchema, Hotel.config(sequelize));
  IndustrialBuilding.init(IndustrialBuildingSchema, IndustrialBuilding.config(sequelize));
  Warehouse.init(WarehouseSchema, Warehouse.config(sequelize));
}

module.exports = setupModels;