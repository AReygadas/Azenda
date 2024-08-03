const { Model, DataTypes, Sequelize } = require('sequelize');

const COMMERCIAL_BUILDING_TABLE = 'commercial_buildings';

const CommercialBuildingSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  numberOfFloors: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field: 'number_of_floors'
  },
  mezzanine: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  receptionWithCounter: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'reception_with_counter'
  },
  bathrooms: {
    allowNull: false,
    type: DataTypes.INTEGER 
  },
  parking: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  rooms: {
    allowNull: false,
    type: DataTypes.INTEGER 
  },
  restaurant: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  kitchen: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  showroom: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  basement: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  elevators: {
    allowNull: false,
    type: DataTypes.INTEGER 
  },
  guardHouse: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'guard_House'
  },
  height: {
    allowNull: false,
    type: DataTypes.FLOAT
  },
  age: {
    allowNull: false,         
    type: DataTypes.INTEGER 
  },
  garden: {
    allowNull: false,
    type: DataTypes.BOOLEAN 
  },
  coworkingArea: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'coworking_area'
  },
  commercialPremises: {
    allowNull: false,
    type: DataTypes.INTEGER,
    field:'commercial_premises'
  },
  eventsHall: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field:'events_hall'
  },
  penthouses: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  airConditioning: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'air_conditioning' 
  },
  swimmingPool: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'swimming_pool' 
  },
  childrensGames: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'childrens_games' 
  },
  fireAlarm: {
    allowNull: false,
    type: DataTypes.BOOLEAN ,
    field: 'fire_alarm' 
  },
  cistern: {
    allowNull: false,         
    type: DataTypes.BOOLEAN 
  },
  emergencyExit: {
    allowNull: false,
    type: DataTypes.INTEGER ,
    field: 'emergency_exit' 
  },
  fireExtinguisher: {
    allowNull: false,         
    type: DataTypes.INTEGER,
    field: 'fire_extinguisher' 
  },
  laundry: {
    allowNull: false,         
    type: DataTypes.BOOLEAN 
  }
};

class CommercialBuilding extends Model {
  static associate(models) {
    this.hasMany(models.CommercialProperty, {
      as: 'commercialProperties',
      foreignKey: 'commercialBuildingId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMERCIAL_BUILDING_TABLE,
      modelName: 'CommercialBuilding',
      timestamps: false,
    };
  }
}

module.exports = { COMMERCIAL_BUILDING_TABLE, CommercialBuildingSchema, CommercialBuilding };
