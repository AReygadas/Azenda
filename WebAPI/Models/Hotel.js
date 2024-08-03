const { Model, DataTypes, Sequelize } = require('sequelize');

const HOTEL_TABLE = 'hotels';

const HotelSchema = {
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
  conferenceRoom: {
    allowNull: false,
    type: DataTypes.BOOLEAN,
    field: 'conference_room' 
  },
  gym: {
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
  nursery: {
    allowNull: false,
    type: DataTypes.BOOLEAN
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
  bar: {
    allowNull: false,
    type: DataTypes.BOOLEAN
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
  suite: {
    allowNull: false,
    type: DataTypes.INTEGER
  },
  terrace: {
    allowNull: false,
    type: DataTypes.BOOLEAN
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
  wifi: {
    allowNull: false,         
    type: DataTypes.BOOLEAN
  },
  laundry: {
    allowNull: false,         
    type: DataTypes.BOOLEAN 
  }
};

class Hotel extends Model {
  static associate(models) {
    this.hasMany(models.CommercialProperty, {
      as: 'commercialProperties',
      foreignKey: 'hotelId',
    });
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: HOTEL_TABLE,
      modelName: 'Hotel',
      timestamps: false,
    };
  }
}

module.exports = { HOTEL_TABLE, HotelSchema, Hotel };
