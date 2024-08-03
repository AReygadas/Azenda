const { Model, DataTypes, Sequelize } = require('sequelize');
const { Hotel , HOTEL_TABLE } = require('./hotel');
const { CommercialBuilding , COMMERCIAL_BUILDING_TABLE } = require('./CommercialBuilding');
const { IndustrialBuilding , INDUSTRIAL_BUILDING_TABLE } = require('./IndustrialBuilding');
const { Warehouse , WAREHOUSE_TABLE } = require('./Warehouse');
const { CommercialUnit , COMMERCIAL_UNIT_TABLE } = require('./CommercialUnit');
const { Office , OFFICE_TABLE } = require('./Office');

const COMMERCIAL_PROPERTIES_TABLE = 'commercial_properties';

const CommercialPropertySchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  propertyType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'property_type'
  },

  floorUse: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'floor_use'
  },
  operationType: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'operation_type'
  },

  contractDate: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'contract_date'
  },
  keys: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  date: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  maxValue: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'max_value'
  },
  minValue: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'min_value'
  },
  overprice: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'overprice'
  },
  saleCommission: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'sale_commission'
  },
  rentCommission: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'rent_commission'
  },
  code: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'code'
  },

  referredBy: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'referred_by'
  },
  exclusivity: {
    allowNull: false,
    type: DataTypes.BOOLEAN
  },
  exclusivityDuration: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'exclusivity_duration'
  },
  responsibleAdvisor: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'responsible_advisor'
  },
  sellerName: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'seller_name'
  },
  phoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'phone_number'
  },
  cellPhoneNumber: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'cell_phone_number'
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'email'
  },
  propertyAddress: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'property_address'
  },
  zone: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'zone'
  },
  between: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'between'
  },
  postalCode: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'postal_code'
  },
  saleConditions: {
    allowNull: false,
    type: DataTypes.STRING,
    field: 'sale_conditions'
  },
  terrain: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'terrain'
  },
  construction: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'construction'
  },
  front: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'front'
  },
  depth: {
    allowNull: false,
    type: DataTypes.FLOAT,
    field: 'depth'
  },

  officeId: {
    field: 'office_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: OFFICE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  commercialUnitId: {
    field: 'commercial_unit_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: COMMERCIAL_UNIT_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  warehouseId: {
    field: 'warehouse_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: WAREHOUSE_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  industrialBuildingId: {
    field: 'industrial_building_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: INDUSTRIAL_BUILDING_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  commercialBuildingId: {
    field: 'commercial_building_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: COMMERCIAL_BUILDING_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  hotelId: {
    field: 'hotel_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: HOTEL_TABLE,
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL',
  },
  
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: Sequelize.NOW
  }
}

class CommercialProperty extends Model {
  static associate() {
    this.belongsTo(Office, { as: 'office', foreignKey: 'officeId' });
    this.belongsTo(CommercialUnit, { as: 'commercialUnit', foreignKey: 'commercialUnitId' });
    this.belongsTo(Warehouse, { as: 'warehouse', foreignKey: 'warehouseId' });
    this.belongsTo(IndustrialBuilding, { as: 'industrialBuilding', foreignKey: 'industrialBuildingId' });
    this.belongsTo(CommercialBuilding, { as: 'commercialBuilding', foreignKey: 'commercialBuildingId' });
    this.belongsTo(Hotel, { as: 'hotel', foreignKey: 'hotelId' });
}

  static config(sequelize) {
    return {
      sequelize,
      tableName: COMMERCIAL_PROPERTIES_TABLE,
      modelName: 'CommercialProperty',
      timestamps: false
    }
  }
}

module.exports = { COMMERCIAL_PROPERTIES_TABLE, CommercialPropertySchema, CommercialProperty };
