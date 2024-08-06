const { Model, DataTypes, Sequelize } = require('sequelize');

const ADDRESSES_TABLE = 'Addresses';
const AddressesSchema = {
  id: {
    allowNull: false,
    autoIncrement: true, 
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  postalCode: {
    allowNull: false, 
    type: DataTypes.STRING,
    unique: true,
    field: 'postal_code'
  },
  nameSettlement: {
    allowNull: false, 
    type: DataTypes.STRING,
    field: 'name_settlement'
  },
  typeSettlement: {
    allowNull: false, 
    type: DataTypes.STRING,
    field: 'type_settlement'
  },
  nameMunicipality: {
    allowNull: false, 
    type: DataTypes.STRING,
    field: 'name_municipality'
  },
  stateName: {
    allowNull: false, 
    type: DataTypes.STRING,
    field: 'state_name'
  },
  cityName: {
    allowNull: false, 
    type: DataTypes.STRING,
    field: 'city_name'
  }
}
class Addresses extends Model {
  static associate() { }
  static config(sequelize) { 
    return { 
      sequelize, 
      tableName: ADDRESSES_TABLE, 
      modelName: 'Addresses', 
      timestamps: false 
    }
  }
}
module.exports = { ADDRESSES_TABLE, AddressesSchema, Addresses }