const { Model, DataTypes, Sequelize } = require('sequelize');

const WAREHOUSE_TABLE = 'warehouses';

const WarehouseSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  steelCurtain: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'steel_curtain'
  },
  trailerPlatform: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'trailer_platform'
  },
  freeAreaManeuvers: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'free_area_maneuvers'
  },
  controlOffices: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'control_offices'
  },
  pointOfSale: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'point_of_sale'
  },
  bathrooms: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  kitchenette: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  warehouse: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  floorThickness: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'floor_thickness' 
  },
  parking: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  guardBooth: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'guard_booth'
  },
  height: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  age: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  bedrooms: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  typeOfLight: {
    allowNull: false,
    type: DataTypes.STRING, 
    field:'type_of_light' 
  },
  securityAlarm: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'security_alarm' 
  },
  windFan: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'wind_fan' 
  },
  transformer: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  mezzanine: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  fireAlarm: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'fire_alarm' 
  },
  hydropneumatic: {
    allowNull: false,         
    type: DataTypes.BOOLEAN 
  },
  cistern: {
    allowNull: false,         
    type: DataTypes.BOOLEAN 
  },
  refrigerationChamber: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'refrigeration_chamber' 
  },
  meetingRoom: {
    allowNull: false,         
    type: DataTypes.INTEGER, 
    field:'meeting_room' 
  },
  lighting: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  luminousSign: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'luminous_sign' 
  },
  fireExtinguisher: {
    allowNull: false,         
    type: DataTypes.INTEGER,
    field: 'fire_extinguisher' 
  }
};

class Warehouse extends Model {
  static associate(models) {
    this.hasMany(models.CommercialProperty, {
      as: 'commercialProperties',
      foreignKey: 'warehouseId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: WAREHOUSE_TABLE,
      modelName: 'Warehouse',
      timestamps: false,
    };
  }
}

module.exports = { WAREHOUSE_TABLE, WarehouseSchema, Warehouse };
