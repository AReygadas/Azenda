const { Model, DataTypes, Sequelize } = require('sequelize');

const COMMERCIAL_UNIT_TABLE = 'commercial_units';

const CommercialUnitSchema = {
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
  accessGate: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'access_gate'
  },
  office: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  bathrooms: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  height: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  age: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  typeOfFloor: {
    allowNull: false,
    type: DataTypes.STRING, 
    field:'type_of_floor' 
  },
  kitchenette: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  mezzanine: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  parking: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  ledLight: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  securityAlarm: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'security_alarm' 
  },
  fireExtinguisher: {
    allowNull: false,         
    type: DataTypes.INTEGER,
    field: 'fire_extinguisher' 
  },
  fireAlarm: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'fire_alarm' 
  },
  airConditioning: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'air_conditioning' 
  },
  fan: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  groundFloor: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'ground_floor' 
  },
  upperFloor: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'upper_floor' 
  },
  floorLevel: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'floor_level' 
  },
  elevator: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  stairs: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  commonArea: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'common_area' 
  }
};

class CommercialUnit extends Model {
  static associate(models) {
    this.hasMany(models.CommercialProperty, {
      as: 'commercialProperties',
      foreignKey: 'commercialUnitId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMERCIAL_UNIT_TABLE,
      modelName: 'CommercialUnit',
      timestamps: false,
    };
  }
}

module.exports = { COMMERCIAL_UNIT_TABLE, CommercialUnitSchema, CommercialUnit };
