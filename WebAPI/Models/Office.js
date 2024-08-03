const { Model, DataTypes, Sequelize } = require('sequelize');

const OFFICE_TABLE = 'offices';

const OfficeSchema = {
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
  private: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  meetingRoom: {
    allowNull: false,         
    type: DataTypes.INTEGER, 
    field:'meeting_room' 
  },
  bathrooms: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  height: {
    allowNull: false,
    type: DataTypes.FLOAT
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
  desks: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  filingCabinets: {
    allowNull: false,         
    type: DataTypes.INTEGER,
    field: 'filing_cabinets' 
  },
  lamps: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  chairs: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  workModule: {
    allowNull: false,         
    type: DataTypes.INTEGER,
    field: 'work_module' 
  },
  plants: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  age: {
    allowNull: false,         
    type: DataTypes.INTEGER 
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

class Office extends Model {
  static associate(models) {
    this.hasMany(models.CommercialProperty, {
      as: 'commercialProperties',
      foreignKey: 'officeId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: OFFICE_TABLE,
      modelName: 'Office',
      timestamps: false,
    };
  }
}

module.exports = { OFFICE_TABLE, OfficeSchema, Office };
